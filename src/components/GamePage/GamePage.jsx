import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from './GamePage.module.css'

import { gamePageSelector } from './GamePage.selector'
import HeaderGame from '../Header/HeaderGame'
import GameDesktop from '../../resources/images/game-screen.png'
import GameMobile from '../../resources/images/game-screen-mobile.png'

import { MOBILE_WIDTH } from '../../shared/constants'

function GamePage() {
    let history = useHistory()
    const { id } = useParams()
    const { width, allGames } = useSelector(gamePageSelector)
    const game = allGames.find(item => item.id === id)

    return (
        <div>
            <HeaderGame title={game.displayName} gameId={id} />
            <div className={styles['frame-container']}>
                {game ? (
                    <img
                        className={styles['game-img']}
                        src={width === MOBILE_WIDTH ? GameMobile : GameDesktop}
                        alt="game-screen"
                    />
                ) : (
                    () => history.push('/game/original_dice_game')
                )}
            </div>
        </div>
    )
}

export default GamePage
