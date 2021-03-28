import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Header.module.css'

import DiceIcon from '../../resources/icons/dice.svg'
import ArrowBack from '../../resources/icons/back.svg'
import { fetchLogout } from '../../shared/fetchs/fetchs'

Header.propTypes = {
    isMainPage: PropTypes.bool.isRequired,
    token: PropTypes.string,
    setToken: PropTypes.func,
    setIsLoginModalVisible: PropTypes.func,
    setIsRegistrationModalVisible: PropTypes.func,
    title: PropTypes.string,
}

function Header({
    isMainPage,
    token,
    setToken,
    setIsLoginModalVisible,
    setIsRegistrationModalVisible,
    title = 'Game',
}) {
    const logout = () => {
        setToken(null)
        fetchLogout()
    }

    const login = () => setIsLoginModalVisible(true)
    const signup = () => setIsRegistrationModalVisible(true)

    const unauthorizedHeader = () => (
        <div className={styles['unauthorized']}>
            <button className={styles['login-button']} onClick={login}>
                Вход
            </button>

            <button className={styles['registration-button']} onClick={signup}>
                Регистрация
            </button>
        </div>
    )

    const renderAuthorizedHeader = () => (
        <div className={styles['authorized']}>
            <button className={styles['logout-button']} onClick={logout}>
                Выход
            </button>
        </div>
    )

    const renderMainPageHeader = () => (
        <div className={styles['main-page-container']}>
            <Link to={'/game/original_dice_game'}>
                <img
                    className={styles['dice']}
                    src={DiceIcon}
                    alt="dice-icon"
                />
            </Link>

            {token ? renderAuthorizedHeader() : unauthorizedHeader()}
        </div>
    )

    const renderGamePageHeader = () => (
        <div className={styles['game']}>
            <Link to={'/'}>
                <img src={ArrowBack} alt="back-arrow" />
            </Link>
            <p>{title}</p>
        </div>
    )

    return (
        <div className={styles['container']}>
            {isMainPage ? renderMainPageHeader() : renderGamePageHeader()}
        </div>
    )
}

export default Header
