import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './Sidebar.module.css'

import { MOBILE_WIDTH } from '../../shared/constants'
import {
    CHANGE_CATEGORY_SELECTANCE,
    CHANGE_PROVIDER_SELECTANCE,
} from '../../store/actions'

Sidebar.propTypes = {
    categories: PropTypes.array,
    providers: PropTypes.array,
    changeProvidersSelectance: PropTypes.func,
    changeCategorySelectance: PropTypes.func,
}

function Sidebar({
    categories,
    providers,
    changeProvidersSelectance,
    changeCategorySelectance,
}) {
    const [width, setWindowWidth] = useState(0)
    const [filtersVisibility, setFiltersVisibility] = useState(false)
    const [anySelected, setAnySelected] = useState(false)
    const [recentlySelected, setRecentlySelected] = useState([])

    useEffect(() => {
        updateScreenWidth()

        window.addEventListener('resize', updateScreenWidth)
        return () => window.removeEventListener('resize', updateScreenWidth)
    }, [])

    const updateScreenWidth = () => setWindowWidth(window.innerWidth)

    const select = (id, isCategory) => {
        setAnySelected(true)

        isCategory
            ? changeCategorySelectance(id)
            : changeProvidersSelectance(id)

        if (width < MOBILE_WIDTH)
            setRecentlySelected([...recentlySelected, { id, isCategory }])
    }

    const cancel = () => {
        recentlySelected.map(({ id, isCategory }) => {
            isCategory
                ? changeCategorySelectance(id)
                : changeProvidersSelectance(id)
        })

        setFiltersVisibility(!filtersVisibility)
        setRecentlySelected([])
    }

    const applyFilters = () => {
        setFiltersVisibility(!filtersVisibility)
        setRecentlySelected([])
    }

    const renderAllCategories = () =>
        categories.map(category => (
            <div
                key={category.id}
                className={`${styles['category']} ${
                    category.isSelected ? styles['selected'] : ''
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
                    provider.isSelected ? styles['selected'] : ''
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
                        onClick={cancel}
                        alt="cancel-icon"
                    />
                </div>

                <hr />
            </div>
        )
    }

    const renderApplyFilterButton = () =>
        width < MOBILE_WIDTH &&
        anySelected && (
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
            {width < MOBILE_WIDTH && handleFilterButton()}

            {((width < MOBILE_WIDTH && filtersVisibility) ||
                width >= MOBILE_WIDTH) &&
                renderOpenedFilters()}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    changeCategorySelectance: id => dispatch(CHANGE_CATEGORY_SELECTANCE(id)),
    changeProvidersSelectance: id => dispatch(CHANGE_PROVIDER_SELECTANCE(id)),
})

export default connect(
    null,
    mapDispatchToProps
)(Sidebar)
