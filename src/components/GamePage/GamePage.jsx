import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from './GamePage.module.css'

import Header from '../Header/Header'
import { gamePageSelector } from './GamePage.selector'
import { NO_TITLE } from '../../shared/constants'

function GamePage() {
    let history = useHistory()
    const { id } = useParams()
    const { allGames } = useSelector(gamePageSelector)
    const game = allGames.find(item => item.id === id)

    const toDiceGame = () => history.push('/game/original_dice_game')
    return (
        <div>
            <Header
                isMainPage={false}
                title={game ? game.displayName : NO_TITLE}
            />

            <div className={styles['frame-container']}>
                {game ? (
                    <iframe id={id} src={game.url || 'https://wiki.com'} />
                ) : (
                    toDiceGame()
                )}
            </div>
        </div>
    )
}

export default GamePage
