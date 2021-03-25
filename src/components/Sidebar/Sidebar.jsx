import React, { useCallback, useState } from 'react'

import styles from './Sidebar.module.css'

import { MOBILE_WIDTH } from '../../shared/constants'
import { useDispatch, useSelector } from 'react-redux'

import {
    setFiltersVisibility,
    setCategory,
    toggleProvider,
} from '../../redux/actions/filters'

import Categories from './Categories/Categories'
import Providers from './Providers/Providers'
import FilterButton from './FilterButton/FilterButton'
import { sidebarSelector } from './Sidebar.selector.js'

function Sidebar() {
    const dispatch = useDispatch()

    const [lastSelected, setLastSelected] = useState({
        category: null,
        providers: [],
    })

    const {
        width,
        filtersVisibility,
        selectedCategory,
        selectedProviders,
    } = useSelector(sidebarSelector)

    const changeFiltersVisibility = () =>
        dispatch(setFiltersVisibility(!filtersVisibility))

    const select = (id, isCategory) =>
        isCategory ? dispatch(setCategory(id)) : dispatch(toggleProvider(id))

    const onSelectHandler = useCallback(
        (id, isCategory) => e => {
            e.preventDefault()

            select(id, isCategory)
        },
        []
    )

    const resetLastSelected = () =>
        setLastSelected({
            category: null,
            providers: [],
        })

    const applyFilters = () => {
        resetLastSelected()
        changeFiltersVisibility()
    }

    const onFilterButtonClick = () => {
        setLastSelected({
            category: selectedCategory,
            providers: selectedProviders,
        })

        changeFiltersVisibility()
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

    return (
        <div className={styles['container']}>
            {width === MOBILE_WIDTH && (
                <FilterButton
                    onFilterButtonClick={onFilterButtonClick}
                    lastSelected={lastSelected}
                    resetLastSelected={resetLastSelected}
                />
            )}

            {((width === MOBILE_WIDTH && filtersVisibility) ||
                width > MOBILE_WIDTH) && (
                <>
                    <div className={styles['categories']}>
                        <Categories
                            selectedCategory={selectedCategory}
                            onSelectHandler={onSelectHandler}
                        />
                    </div>

                    <hr />

                    <div className={styles['providers']}>
                        <h2>Провайдеры</h2>
                        <Providers
                            selectedProviders={selectedProviders}
                            onSelectHandler={onSelectHandler}
                        />
                    </div>

                    {renderApplyFilterButton()}
                </>
            )}
        </div>
    )
}

export default Sidebar
