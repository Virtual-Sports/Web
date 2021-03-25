import { createSelector } from 'reselect'

const dataSelector = state => state.data

export const allGamesSelector = createSelector(
    [dataSelector],
    data => {
        return {
            width: data.width,
            tags: data.data.tags,
            allGames: data.data.games,
        }
    }
)
