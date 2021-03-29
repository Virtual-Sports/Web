import { createSelector } from 'reselect'

const favouriteGamesSelector = state => state.data.favourites
const recentGamesSelector = state => state.data.recent
const recommendedGamesSelector = state => state.data.recommended

export const customGamesSelector = createSelector(
    [favouriteGamesSelector, recentGamesSelector, recommendedGamesSelector],
    (favourites, recent, recommended) => {
        return {
            favouriteGames: favourites,
            recentGames: recent,
            recommendedGames: recommended,
        }
    }
)
