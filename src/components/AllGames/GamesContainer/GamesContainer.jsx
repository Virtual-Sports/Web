import React from 'react'
import PropTypes from 'prop-types'

import styles from './GamesContainer.module.css'

import GameCard from '../GameCard/GameCard'
import { MOBILE_WIDTH, TABLET_WIDTH } from '../../../shared/constants'
import { useSelector } from 'react-redux'
import { allGamesSelector } from '../AllGames.selector.js'

GamesContainer.propTypes = {
    icon: PropTypes.string,
    numberToDisplay: PropTypes.number,
    title: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired,
}

function GamesContainer({ title, games, numberToDisplay = null, icon = null }) {
    const { width } = useSelector(allGamesSelector)

    const gamesToDisplay = () => {
        if (!numberToDisplay) return games

        let length = 4
        if (width <= MOBILE_WIDTH) length = 2
        else if (width <= TABLET_WIDTH) length = 3

        return games.slice(0, length)
    }

    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                {icon ? <img src={icon} alt="icon" /> : <></>}
                <h2 className={styles['title']}>{title}</h2>
            </div>

            <div className={styles['games']}>
                {gamesToDisplay().map(game => (
                    <GameCard
                        key={game.id}
                        id={game.id}
                        title={game.displayName}
                        img={game.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default GamesContainer
