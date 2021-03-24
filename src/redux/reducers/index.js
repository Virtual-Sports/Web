import { combineReducers } from 'redux'

import filters from './filters'
import data from './data'

const rootReducer = combineReducers({
    filters,
    data,
})

export default rootReducer
