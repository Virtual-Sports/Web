import { createSelector } from 'reselect'

const dataSelector = state => state.data
const filterSelector = state => state.filters

export const mainPageSelector = createSelector(
    [dataSelector, filterSelector],
    (data, filters) => {
        return {
            filtersVisibility: filters.areFiltersVisible,
            categories: data.data.categories,
            providers: data.data.providers,
        }
    }
)
