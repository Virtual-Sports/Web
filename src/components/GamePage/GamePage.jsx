import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from './GamePage.module.css'

import { gamePageSelector } from './GamePage.selector'
import HeaderGame from '../Header/HeaderGame'

function GamePage() {
    let history = useHistory()
    const { id } = useParams()
    const { allGames } = useSelector(gamePageSelector)
    const game = allGames.find(item => item.id === id)

    return (
        <div>
            <HeaderGame title={game.displayName} gameId={id} />
            <div className={styles['frame-container']}>
                {game ? (
                    <iframe
                        id={id}
                        src={game.url || 'https://parimatch.com/'}
                    />
                ) : (
                    () => history.push('/game/original_dice_game')
                )}
            </div>
        </div>
    )
}

export default GamePage
