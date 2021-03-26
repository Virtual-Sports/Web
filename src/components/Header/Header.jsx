import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Header.module.css'

import DiceIcon from '../../resources/icons/dice.svg'
import ArrowBack from '../../resources/icons/back.svg'

Header.propTypes = {
    isMainPage: PropTypes.bool.isRequired,
    token: PropTypes.string,
    setToken: PropTypes.func,
    setIsLoginModalVisible: PropTypes.func,
    setIsRegistrationModalVisible: PropTypes.func,
}

function Header({
    isMainPage,
    token,
    setToken,
    setIsLoginModalVisible,
    setIsRegistrationModalVisible,
}) {
    const gameName = 'Football'

    const renderMainPageHeader = () => (
        <div className={styles['main-page-container']}>
            <Link to={'/dice'}>
                <img
                    className={styles['dice']}
                    src={DiceIcon}
                    alt="dice-icon"
                />
            </Link>

            {token ? (
                <div className={styles['authorized']}>
                    <button
                        className={styles['logout-button']}
                        onClick={() => setToken(null)}
                    >
                        Выход
                    </button>
                </div>
            ) : (
                <div className={styles['unauthorized']}>
                    <button
                        className={styles['login-button']}
                        onClick={() => setIsLoginModalVisible(true)}
                    >
                        Вход
                    </button>

                    <button
                        className={styles['registration-button']}
                        onClick={() => setIsRegistrationModalVisible(true)}
                    >
                        Регистрация
                    </button>
                </div>
            )}
        </div>
    )

    const renderGamePageHeader = () => (
        <div className={styles['game']}>
            <Link to={'/'}>
                <img src={ArrowBack} alt="back-arrow" />
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
