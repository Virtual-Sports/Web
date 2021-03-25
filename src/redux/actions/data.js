import { response } from '../response'
import { SET_DATA, SET_LOADED, SET_WIDTH } from './constants' // TODO: remove on production

// TODO: mb create action for each subarray
export const setLoaded = status => ({
    type: SET_LOADED,
    payload: status,
})

export const setData = items => ({
    type: SET_DATA,
    payload: items,
})

export const setWidth = width => ({
    type: SET_WIDTH,
    payload: width,
})

// https://virtual-sports-yi3j9.ondigitalocean.app/

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
