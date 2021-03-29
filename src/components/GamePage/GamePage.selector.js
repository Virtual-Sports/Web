import { createSelector } from 'reselect'

const dataSelector = state => state.data

export const gamePageSelector = createSelector(
    [dataSelector],
    data => {
        return {
            width: data.width,
            allGames: data.data.games,
        }
    }
)
