import React, { useEffect, useState } from 'react'

import styles from './Sidebar.module.css'
import { CONFIG } from '../../config'

function Sidebar() {
    const categories = CONFIG.categories
    const providers = CONFIG.providers

    const [filtersVisibility, setFiltersVisibility] = useState(false)
    const [width, setWindowWidth] = useState(0)
    const [anySelected, setAnySelected] = useState(false)

    useEffect(() => {
        updateDimensions()

        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    const updateDimensions = () => setWindowWidth(window.innerWidth)

    const select = () => setAnySelected(true)

    const renderAllCategories = () => {
        return categories.map(category => (
            <div
                key={category.id}
                className={styles['category']}
                onClick={select}
            >
                <img src={category.icon} alt="category-icon" />
                <p>{category.displayName}</p>
            </div>
        ))
    }

    const renderAllProviders = () => {
        return providers.map(provider => (
            <div
                key={provider.id}
                className={styles['provider']}
                onClick={select}
            >
                <img src={provider.icon} alt="provider-icon" />
            </div>
        ))
    }

    const handelFilterButton = () => {
        return !filtersVisibility ? (
            <button
                className={styles['filters-closed']}
                onClick={() => setFiltersVisibility(!filtersVisibility)}
            >
                <img src="./icons/settings.svg" alt="filters-icon" />
                <span>Фильтры</span>
            </button>
        ) : (
            <div className={styles['filters-opened']}>
                <div>
                    <span>Фильтры</span>
                    <img
                        src="./icons/cancel.svg"
                        onClick={() => setFiltersVisibility(!filtersVisibility)}
                        alt="cancel-icon"
                    />
                </div>

                <hr />
            </div>
        )
    }

    const renderApplyFilterButton = () =>
        width < 400 && anySelected ? (
            <button className={styles['apply-filters-button']}>
                Применить
            </button>
        ) : (
            <> </>
        )

    return (
        <div className={styles['container']}>
            {width < 400 ? handelFilterButton() : <> </>}

            {(width < 400 && filtersVisibility) || width >= 400 ? (
                <>
                    <div className={styles['categories']}>
                        {renderAllCategories()}
                    </div>

                    <hr />

                    <div className={styles['providers']}>
                        <h2>Провайдеры</h2>
                        {renderAllProviders()}
                    </div>

                    {renderApplyFilterButton()}
                </>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Sidebar
