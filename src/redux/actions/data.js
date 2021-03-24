import { response } from '../response' // TODO: remove on production
import { SET_LOADED, SET_DATA } from './сonstants'

// TODO: mb create action for each subarray
export const setLoaded = status => ({
    type: SET_LOADED,
    payload: status,
})

export const setData = items => ({
    type: SET_DATA,
    payload: items,
})

export const fetchData = () => dispatch => {
    dispatch(setLoaded(false))

    // TODO: just for test - remove on production
    setTimeout(() => {
        dispatch(setData(response))
        dispatch(setLoaded(true))
    }, 2000)

    // TODO
    /* getDataFromSeverFunction().then(({ data }) => {
        // TODO: create an object with 4 arrays from the response
        dispatch(setData(data))
    }) */
}
