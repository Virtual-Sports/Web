import React from 'react'
import PropTypes from 'prop-types'

import styles from './GamesContainer.module.css'

import GameCard from '../GameCard/GameCard'

GamesContainer.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired,
}

function GamesContainer({ icon = null, title, games }) {
    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                {icon ? <img src={icon} alt="icon" /> : <></>}
                <h2 className={styles['title']}>{title}</h2>
            </div>

            <div className={styles['games']}>
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    )
}

export default GamesContainer
