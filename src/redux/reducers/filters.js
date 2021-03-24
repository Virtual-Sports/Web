import { TOGGLE_PROVIDER, SET_CATEGORY } from '../actions/сonstants'

const initialState = {
    selectedCategory: null, // only 1 category
    selectedProviders: [], // multiple providers
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PROVIDER:
            return {
                ...state,
                selectedProviders: state.selectedProviders.includes(
                    action.payload
                )
                    ? state.selectedProviders.filter(
                          providerId => providerId !== action.payload
                      )
                    : [...state.selectedProviders, action.payload],
            }
        case SET_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload,
            }
        default:
            return state
    }
}

export default filters
