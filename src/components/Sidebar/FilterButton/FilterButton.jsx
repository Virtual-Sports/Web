import React from 'react'

import styles from '../Sidebar.module.css'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarSelector } from '../Sidebar.selector'
import { ReactComponent as Settings } from '../../../resources/icons/settings.svg'
import { ReactComponent as Cancel } from '../../../resources/icons/cancel.svg'

import {
    setCategory,
    setFiltersVisibility,
    toggleProvider,
} from '../../../redux/actions/filters'

FilterButton.propTypes = {
    onFilterButtonClick: PropTypes.func.isRequired,
    lastSelected: PropTypes.object.isRequired,
    resetLastSelected: PropTypes.func.isRequired,
}

function FilterButton({
    onFilterButtonClick,
    lastSelected,
    resetLastSelected,
}) {
    const dispatch = useDispatch()

    const { filtersVisibility, selectedProviders } = useSelector(
        sidebarSelector
    )

    const cancel = () => {
        dispatch(setCategory(lastSelected.category))
        const difference = lastSelected.providers
            .filter(x => !selectedProviders.includes(x))
            .concat(
                selectedProviders.filter(
                    x => !lastSelected.providers.includes(x)
                )
            )

        difference.map(provider => dispatch(toggleProvider(provider)))

        resetLastSelected()
        dispatch(setFiltersVisibility(!filtersVisibility))
    }

    return (
        <div>
            {!filtersVisibility ? (
                <button
                    className={styles['filters-closed']}
                    onClick={onFilterButtonClick}
                >
                    <Settings />
                    <span>Фильтры</span>
                </button>
            ) : (
                <div className={styles['filters-opened']}>
                    <div>
                        <span>Фильтры</span>
                        <Cancel onClick={cancel} />
                    </div>

                    <hr />
                </div>
            )}
        </div>
    )
}

export default FilterButton
