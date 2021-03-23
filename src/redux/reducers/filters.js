const initialState = {
    selectedCategory: null, // only 1 category
    selectedProviders: [], // multiple providers
}

const filters = (state = initialState, action) => {
    /* 
    if (action.type === 'ADD_PROVIDER') {
        return {
            ...state,
            selectedProviders: [...selectedProviders, action.payload],
        }
    } else if (action.type === 'REMOVE_PROVIDER') {
        return {
            ...state,
            selectedProviders: selectedProviders.filter(
                providerId => providerId !== action.payload
            ),
        }
    }
    */
    switch (action.type) {
        case 'TOGGLE_PROVIDER':
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
        case 'SET_CATEGORY':
            return {
                ...state,
                selectedCategory: action.payload,
            }
        default:
            return state
    }
}

export default filters
