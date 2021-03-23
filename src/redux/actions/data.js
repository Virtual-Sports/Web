// TODO: mb create action for each subarray
export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchData = () => dispatch => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    })

    // TODO
    /* getDataFromSeverFunction().then(({ data }) => {
        dispatch(setData(data))
    }) */
}

export const setData = items => ({
    type: 'SET_DATA',
    payload: items,
})
