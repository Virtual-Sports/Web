import { createSelector } from 'reselect'

const favouritesSelector = state => state.data.favourites

export const favouritesGamesSelector = createSelector(
    [favouritesSelector],
    favourites => {
        return {
            favouritesGames: favourites,
        }
    }
)
