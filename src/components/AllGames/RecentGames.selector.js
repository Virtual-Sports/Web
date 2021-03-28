import { createSelector } from 'reselect'

const recentSelector = state => state.data.recent

export const recentGamesSelector = createSelector(
    [recentSelector],
    recent => {
        return {
            recentGames: recent,
        }
    }
)
