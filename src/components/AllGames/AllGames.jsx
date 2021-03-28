import React from 'react'
import { useSelector } from 'react-redux'

import styles from './AllGames.module.css'

import GamesContainer from './GamesContainer/GamesContainer'
import GamesCardSlider from './GameCardSlider/GameCardSlider'

import { Slider } from '../../shared/slider/Slider'
import { allGames as messages } from '../../shared/messages'

import { allGamesSelector } from './AllGames.selector.js'
import { filtersSelector } from './Filters.selector.js'

function AllGames() {
    const { allGames, tags } = useSelector(allGamesSelector)
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
        <div className={styles['container']}>
            {selectedCategory || selectedProviders.length > 0 ? (
                <GamesContainer title={title} games={filteredGames(allGames)} />
            ) : (
                <>
                    {topGames.length && (
                        <Slider topTag={topTag}>
                            {topGames.map(item => (
                                <GamesCardSlider
                                    key={item.id}
                                    id={item.id}
                                    title={item.displayName}
                                    image={item.url}
                                />
                            ))}
                        </Slider>
                    )}
                    {tagsWithoutTop.map(tag => {
                        return (
                            <div
                                key={tag.displayName}
                                className={styles['tags']}
                            >
                                <GamesContainer
                                    title={tag.displayName}
                                    games={allGames.filter(game =>
                                        game.tags.includes(tag.displayName)
                                    )}
                                />
                            </div>
                        )
                    })}
                </>
            )}
        </div>
    )
}

export default AllGames
