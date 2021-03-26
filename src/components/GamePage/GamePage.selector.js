import { createSelector } from 'reselect'

const dataSelector = state => state.data

export const gamePageSelector = createSelector(
    [dataSelector],
    data => {
        console.log(data)
        return {
            allGames: data.data.games,
        }
    }
)
