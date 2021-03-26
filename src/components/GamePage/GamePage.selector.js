import { createSelector } from 'reselect'

const dataSelector = state => state.data

export const gamePageSelector = createSelector(
    [dataSelector],
    data => {
        return {
            allGames: data.data.games,
        }
    }
)
