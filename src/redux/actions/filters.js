import { ARE_FILTERS_VISIBLE, SET_CATEGORY, TOGGLE_PROVIDER } from './constants'

export const areFiltersVisible = value => ({
    type: ARE_FILTERS_VISIBLE,
    payload: value,
})

export const toggleProvider = providerId => ({
    type: TOGGLE_PROVIDER,
    payload: providerId,
})

export const setCategory = categoryId => ({
    type: SET_CATEGORY,
    payload: categoryId,
})
