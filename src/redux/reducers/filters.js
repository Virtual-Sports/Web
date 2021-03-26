import {
    SET_CATEGORY,
    SET_FILTERS_VISIBILITY,
    TOGGLE_PROVIDER,
} from '../actions/constants'

const initialState = {
    areFiltersVisible: false,
    selectedCategory: null, // only 1 category
    selectedProviders: [], // multiple providers
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTERS_VISIBILITY:
            return {
                ...state,
                areFiltersVisible: action.payload,
            }

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
                selectedCategory:
                    state.selectedCategory === action.payload
                        ? null
                        : action.payload,
            }

        default:
            return state
    }
}

export default filters
