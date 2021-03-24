import React from 'react'
import PropTypes from 'prop-types'

import styles from './GamesContainer.module.css'

import GameCard from '../GameCard/GameCard'

GamesContainer.propTypes = {
    icon: PropTypes.string,
    numberToDisplay: PropTypes.number,
    title: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired,
}

function GamesContainer({ title, games, numberToDisplay = null, icon = null }) {
    const gamesToDisplay = numberToDisplay
        ? games.slice(0, numberToDisplay)
        : games

    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                {icon ? <img src={icon} alt="icon" /> : <></>}
                <h2 className={styles['title']}>{title}</h2>
            </div>

            <div className={styles['games']}>
                {gamesToDisplay.map(game => (
                    <GameCard
                        key={game.id}
                        id={game.id}
                        title={game.name}
                        img={game.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default GamesContainer
