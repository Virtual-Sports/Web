import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

function Header() {
    const isAuthorized = false
    const isMainPage = true
    const gameName = 'Football'

    const renderMainPageHeader = () => (
        <div className={styles['main-page-container']}>
            <Link to={'/dice'}>
                <img
                    className={styles['dice']}
                    src="./icons/dice.svg"
                    alt="dice-icon"
                />
            </Link>

            {isAuthorized ? (
                <div className={styles['authorized']}>
                    <button className={styles['logout-button']}>Выход</button>
                </div>
            ) : (
                <div className={styles['unauthorized']}>
                    <button className={styles['login-button']}>Вход</button>
                    <button className={styles['registration-button']}>
                        Регистрация
                    </button>
                </div>
            )}
        </div>
    )

    const renderGamePageHeader = () => (
        <div className={styles['game']}>
            <Link to={'/'}>
                <img src="./icons/back.svg" alt="back-arrow" />
            </Link>
            <p>{gameName}</p>
        </div>
    )

    return (
        <div className={styles['container']}>
            {isMainPage ? renderMainPageHeader() : renderGamePageHeader()}
        </div>
    )
}

export default Header
