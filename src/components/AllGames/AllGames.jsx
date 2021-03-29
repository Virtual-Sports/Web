import React from 'react'
import { useSelector } from 'react-redux'

import styles from './AllGames.module.css'

import GamesContainer from './GamesContainer/GamesContainer'
import GamesCardSlider from './GameCardSlider/GameCardSlider'

import { allGamesSelector } from './AllGames.selector.js'
import { customGamesSelector } from './CustomGames.selector.js'
import { filtersSelector } from './Filters.selector.js'
import { allGames as messages } from '../../shared/messages'
import { Slider } from '../../shared/slider/Slider'

function AllGames() {
    const { allGames, tags } = useSelector(allGamesSelector)
    const { favouriteGames, recentGames, recommendedGames } = useSelector(
        customGamesSelector
    )
    const topTag = tags.filter(tag => tag.id === 'top')?.[0]
    const topGames = allGames.filter(game => game.tags.includes('top'))
    const tagsWithoutTop = tags.filter(tag => tag.id !== 'top')

    const {
        selectedCategory,
        selectedCategoryTitle,
        selectedProviders,
    } = useSelector(filtersSelector)

    const filteredGames = games => {
        let tmpGame = [...games]

        tmpGame = selectedCategory
            ? tmpGame.filter(g => g.categories.includes(selectedCategory))
            : tmpGame

        tmpGame =
            selectedProviders.length > 0
                ? tmpGame.filter(g => selectedProviders.includes(g.provider))
                : tmpGame

        return tmpGame
    }

    const title =
        (selectedCategory && selectedProviders.length > 0) ||
        selectedProviders.length > 0
            ? messages.searchResult
            : selectedCategory
            ? selectedCategoryTitle
            : messages.gameList

    return (
        <div className={styles['scroll']}>
            {selectedCategory || selectedProviders.length > 0 ? (
                <div className={styles['container']}>
                    <GamesContainer
                        search={true}
                        title={title}
                        games={filteredGames(allGames)}
                    />
                </div>
            ) : (
                <div className={styles['container']}>
                    {topGames.length && (
                        <Slider topTag={topTag}>
                            {topGames.map(item => {
                                return (
                                    <GamesCardSlider
                                        key={item.id}
                                        id={item.id}
                                        title={item.displayName}
                                        image={item.image}
                                    />
                                )
                            })}
                        </Slider>
                    )}
                    {tagsWithoutTop &&
                        tagsWithoutTop.map(tag => {
                            return (
                                <div key={tag.displayName}>
                                    <GamesContainer
                                        title={tag.displayName}
                                        games={allGames.filter(game =>
                                            game.tags.includes(tag.id)
                                        )}
                                    />
                                </div>
                            )
                        })}

                    <div className={styles['tags']}>
                        <GamesContainer
                            title={messages.favourites}
                            games={filteredGames(favouriteGames)}
                        />
                        <GamesContainer
                            title={messages.recent}
                            games={filteredGames(recentGames)}
                        />
                        <GamesContainer
                            title={messages.recommended}
                            games={filteredGames(recommendedGames)}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default AllGames
