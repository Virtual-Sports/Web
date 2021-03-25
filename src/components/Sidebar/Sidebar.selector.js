import { createSelector } from 'reselect'

const dataSelector = state => state.data
const filterSelector = state => state.filters

export const sidebarSelector = createSelector(
    [dataSelector, filterSelector],
    (data, filters) => {
        return {
            width: data.width,
            filtersVisibility: filters.areFiltersVisible,
            selectedCategory: filters.selectedCategory,
            selectedProviders: filters.selectedProviders,
        }
    }
)
