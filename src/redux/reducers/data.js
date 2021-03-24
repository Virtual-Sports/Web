import { SET_LOADED, SET_DATA } from '../actions/сonstants'

const initialState = {
    data: {
        providers: [],
        categories: [],
        tags: [],
        games: [],
    },
    isLoaded: false,
}

// TODO: mb rename that
const data = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            }
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            }
        default:
            return state
    }
}

export default data
