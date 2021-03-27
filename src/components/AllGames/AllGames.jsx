import React from 'react'

import styles from './AllGames.module.css'

import GamesContainer from './GamesContainer/GamesContainer'
import GamesCardSlider from './GameCardSlider/GameCardSlider'
import { useSelector } from 'react-redux'
import { allGamesSelector } from './AllGames.selector.js'
import { Slider } from '../../shared/slider/Slider'

function AllGames() {
    const { allGames, tags } = useSelector(allGamesSelector)

    const topGames = allGames.filter(game => game.tags.includes('top'))
    const tagsWithoutTop = tags.filter(tag => tag.id !== 'top')
    return (
        <div className={styles['container']}>
            {topGames.length && (
                <Slider>
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
                    <div key={tag.displayName} className={styles['tags']}>
                        <GamesContainer
                            title={tag.displayName}
                            games={allGames.filter(game =>
                                game.tags.includes(tag.displayName)
                            )}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default AllGames
