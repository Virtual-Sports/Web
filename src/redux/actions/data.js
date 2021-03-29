import {
    getDataFromSeverFunction,
    fetchGetFavourite,
    fetchGetRecent,
    fetchGetRecommended,
} from '../../shared/fetchs/fetchs'
import {
    SET_DATA,
    SET_FAVOURITES,
    SET_RECENT,
    SET_RECOMMENDED,
    SET_LOADED,
    SET_WIDTH,
} from './constants' // TODO: remove on production

// TODO: mb create action for each subarray
export const setLoaded = status => ({
    type: SET_LOADED,
    payload: status,
})

export const setData = items => ({
    type: SET_DATA,
    payload: items,
})

export const setFavourites = items => ({
    type: SET_FAVOURITES,
    payload: items,
})

export const setRecent = items => ({
    type: SET_RECENT,
    payload: items,
})

export const setRecommended = items => ({
    type: SET_RECOMMENDED,
    payload: items,
})

export const setWidth = width => ({
    type: SET_WIDTH,
    payload: width,
})

export const fetchData = token => dispatch => {
    dispatch(setLoaded(false))
    getDataFromSeverFunction(token)
        .then(response => {
            if (response.status !== 200) {
                throw Error(response.status)
            }
            return response
        })
        .then(data => data.json())
        .then(body => {
            dispatch(setData(body))
        })
        .catch(err => {
            console.log(err)
            dispatch(setLoaded(true))
        })
}

export const fetchFavourites = token => dispatch => {
    fetchGetFavourite(token)
        .then(response => {
            if (response.status !== 200) {
                throw Error(response.status)
            }
            return response
        })
        .then(data => data.json())
        .then(body => {
            dispatch(setFavourites(body))
        })
        .catch(err => {
            console.log(err)
            dispatch(setLoaded(true))
        })
}

export const fetchRecent = token => dispatch => {
    fetchGetRecent(token)
        .then(response => {
            if (response.status !== 200) {
                throw Error(response.status)
            }
            return response
        })
        .then(data => data.json())
        .then(body => {
            dispatch(setRecent(body))
        })
        .catch(err => {
            console.log(err)
            dispatch(setLoaded(true))
        })
}

export const fetchRecommended = token => dispatch => {
    fetchGetRecommended(token)
        .then(response => {
            if (response.status !== 200) {
                throw Error(response.status)
            }
            return response
        })
        .then(data => data.json())
        .then(body => {
            dispatch(setRecommended(body))
        })
        .catch(err => {
            console.log(err)
            dispatch(setLoaded(true))
        })
}
