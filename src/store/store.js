import reducer from './reducers'
import { createStore } from 'redux'

const initialState = {
    providers: [],
    categories: [],
    tags: [],
    games: [],
}

export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
