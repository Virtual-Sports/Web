import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose
/* eslint-enable */

const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
