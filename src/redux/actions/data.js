import { getDataFromSeverFunction } from '../../components/fetchs/fetchs'
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
// dispatch(setLoaded(false))
export const fetchData = token => dispatch => {
    getDataFromSeverFunction(token)
        .then(data => data.json())
        .then(body => {
            dispatch(setData(body))
        })
}
// dispatch(setLoaded(true))
