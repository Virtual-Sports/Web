import {
    SET_FILTERS_VISIBILITY,
    SET_CATEGORY,
    TOGGLE_PROVIDER,
} from './constants'

export const setFiltersVisibility = value => ({
    type: SET_FILTERS_VISIBILITY,
    payload: value,
})

export const toggleProvider = providerId => ({
    type: TOGGLE_PROVIDER,
    payload: providerId,
})

export const setCategory = (categoryId, categoryTitle) => ({
    type: SET_CATEGORY,
    payload: { id: categoryId, title: categoryTitle },
})
