import React, { useState } from 'react'

import styles from './Sidebar.module.css'

import { MOBILE_WIDTH } from '../../shared/constants'
import { useDispatch, useSelector } from 'react-redux'
import {
    areFiltersVisible,
    setCategory,
    toggleProvider,
} from '../../redux/actions/filters'

function Sidebar() {
    const dispatch = useDispatch()

    const [recentlySelected, setRecentlySelected] = useState([])

    const filtersVisibility = useSelector(
        state => state.filters.areFiltersVisible
    )
    const width = useSelector(state => state.data.width)
    const categories = useSelector(state => state.data.data.categories)
    const providers = useSelector(state => state.data.data.providers)
    const selectedCategory = useSelector(
        state => state.filters.selectedCategory
    )
    const selectedProviders = useSelector(
        state => state.filters.selectedProviders
    )

    const changeFiltersVisibility = () =>
        dispatch(areFiltersVisible(!filtersVisibility))

    const select = (id, isCategory) => {
        isCategory ? dispatch(setCategory(id)) : dispatch(toggleProvider(id))

        if (width === MOBILE_WIDTH)
            setRecentlySelected([...recentlySelected, { id, isCategory }])
    }

    const cancel = () => {
        recentlySelected.map(({ id, isCategory }) => {
            isCategory
                ? dispatch(setCategory(null))
                : dispatch(toggleProvider(id))
        })

        changeFiltersVisibility()
        setRecentlySelected([])
    }

    const applyFilters = () => {
        changeFiltersVisibility()
        setRecentlySelected([])
    }

    const renderAllCategories = () =>
        categories.map(category => (
            <div
                key={category.id}
                className={`${styles['category']} ${
                    category.id === selectedCategory ? styles['selected'] : ''
                }`}
                onClick={select.bind(this, category.id, true)}
            >
                <img src={category.icon} alt="category-icon" />
                <p>{category.displayName}</p>
            </div>
        ))

    const renderAllProviders = () =>
        providers.map(provider => (
            <div
                key={provider.id}
                className={`${styles['provider']} ${
                    selectedProviders.includes(provider.id)
                        ? styles['selected']
                        : ''
                }`}
                onClick={select.bind(this, provider.id, false)}
            >
                <img src={provider.icon} alt="provider-icon" />
            </div>
        ))

    const handleFilterButton = () => {
        return !filtersVisibility ? (
            <button
                className={styles['filters-closed']}
                onClick={changeFiltersVisibility}
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
                        onClick={cancel}
                        alt="cancel-icon"
                    />
                </div>

                <hr />
            </div>
        )
    }

    const renderApplyFilterButton = () =>
        width === MOBILE_WIDTH &&
        (selectedCategory || selectedProviders.length !== 0) && (
            <button
                className={styles['apply-filters-button']}
                onClick={applyFilters}
            >
                Применить
            </button>
        )

    const renderOpenedFilters = () => {
        return (
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
        )
    }

    return (
        <div className={styles['container']}>
            {width === MOBILE_WIDTH && handleFilterButton()}

            {((width === MOBILE_WIDTH && filtersVisibility) ||
                width > MOBILE_WIDTH) &&
                renderOpenedFilters()}
        </div>
    )
}

export default Sidebar
