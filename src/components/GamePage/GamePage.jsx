import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from './GamePage.module.css'

import Header from '../Header/Header'
import { gamePageSelector } from './GamePage.selector'

function GamePage() {
    const { id } = useParams()
    const { allGames } = useSelector(gamePageSelector)
    const game = allGames.find(item => item.id === id)

    return (
        <div>
            <Header isMainPage={false} />
            <div className={styles['frame-container']}>
                <iframe id={id} src={game.url} />
            </div>
        </div>
    )
}

export default GamePage
