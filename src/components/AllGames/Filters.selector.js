import { createSelector } from 'reselect'

const dataSelector = state => state.filters

export const filtersSelector = createSelector(
    [dataSelector],
    filters => ({
        selectedProviders: filters.selectedProviders,
        selectedCategory: filters.selectedCategory,
        selectedCategoryTitle: filters.selectedCategoryTitle,
    })
)
