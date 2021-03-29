import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './GamesContainer.module.css'

import GameCard from '../GameCard/GameCard'
import { ReactComponent as PMSorry } from '../../../resources/icons/pm-sorry.svg'
import { gamesContainer as messages } from '../../../shared/messages'

import { Collapse } from 'react-collapse'

function GamesContainer({ title = '', games = [], search }) {
    const [isOpened, setIsOpened] = useState(true)
    const [isCompleted, setIsCompleted] = useState(true)

    return (
        <>
            {games.length ? (
                <div className={styles['container']}>
                    <div
                        className={styles['header']}
                        onClick={() => {
                            setIsOpened(!isOpened)
                            setIsCompleted(false)
                        }}
                    >
                        <h2 className={styles['title']}>
                            {title}&nbsp;
                            <span className={styles['count']}>
                                [{games.length}]
                            </span>
                        </h2>

                        <i
                            className={`${styles['arrow']} ${
                                !isCompleted
                                    ? isOpened
                                        ? styles['down']
                                        : styles['up']
                                    : isOpened
                                    ? styles['up']
                                    : styles['down']
                            }`}
                        ></i>
                    </div>
                    <Collapse
                        isOpened={isOpened}
                        onRest={() => setIsCompleted(true)}
                    >
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
                    </Collapse>
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

GamesContainer.propTypes = {
    title: PropTypes.string.isRequired,
    games: PropTypes.array,
    search: PropTypes.bool,
}

export default GamesContainer
