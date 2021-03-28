import React from 'react'
import PropTypes from 'prop-types'

import styles from './GamesContainer.module.css'

import GameCard from '../GameCard/GameCard'
import { ReactComponent as PMSorry } from '../../../resources/icons/pm-sorry.svg'
import { gamesContainer as messages } from '../../../shared/messages'

GamesContainer.propTypes = {
    title: PropTypes.string.isRequired,
    games: PropTypes.array,
    search: PropTypes.bool,
}

function GamesContainer({ title = '', games = [], search }) {
    return (
        <>
            {games.length ? (
                <div className={styles['container']}>
                    <div className={styles['header']}>
                        <h2 className={styles['title']}>
                            {title}&nbsp;
                            <span className={styles['count']}>
                                [{games.length}]
                            </span>
                        </h2>
                    </div>
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
                </div>
            ) : (
                search && (
                    <div className={styles['nothing-found']}>
                        <span className={styles['message']}>
                            {messages.nothingFound}
                        </span>
                        <PMSorry className={styles['image']} />
                    </div>
                )
            )}
        </>
    )
}

export default GamesContainer
