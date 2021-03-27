import React from 'react'
import PropTypes from 'prop-types'

import styles from './GamesContainer.module.css'

import GameCard from '../GameCard/GameCard'
import { ReactComponent as PMSorry } from '../../icons/pm-sorry.svg'

GamesContainer.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired,
}

function GamesContainer({ title, games, icon = null }) {
    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                {icon && <img src={icon} alt="icon" />}
                <h2 className={styles['title']}>
                    {title}&nbsp;
                    <span className={styles['count']}>[{games.length}]</span>
                </h2>
            </div>
            {games.length > 0 ? (
                <div className={styles['games']}>
                    {games.map(game => (
                        <GameCard
                            key={game.id}
                            id={game.id}
                            title={game.displayName}
                            img={game.image}
                        />
                    ))}
                </div>
            ) : (
                <PMSorry />
            )}
        </div>
    )
}

export default GamesContainer
