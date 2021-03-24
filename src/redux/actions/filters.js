import { TOGGLE_PROVIDER, SET_CATEGORY } from './сonstants'

export const toggleProvider = providerId => ({
    type: TOGGLE_PROVIDER,
    payload: providerId,
})

export const setCategory = categoryId => ({
    type: SET_CATEGORY,
    payload: categoryId,
})