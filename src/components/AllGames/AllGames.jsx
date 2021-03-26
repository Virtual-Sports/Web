import React from 'react'

import styles from './AllGames.module.css'

import GamesContainer from './GamesContainer/GamesContainer'
import GamesCardSlider from './GameCardSlider/GameCardSlider'
import { useSelector } from 'react-redux'
import { allGamesSelector } from './AllGames.selector.js'
import { Slider } from '../../shared/slider/Slider'

function AllGames() {
    const { allGames } = useSelector(allGamesSelector)

    const topGames = allGames.filter(game => game.tags.includes('top'))
    console.log(allGames, topGames)

    return (
        <div className={styles['container']}>
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
            <div className={styles['tags']}>
                <GamesContainer title={'Все игры'} games={allGames} />
            </div>
        </div>
    )
}

export default AllGames
