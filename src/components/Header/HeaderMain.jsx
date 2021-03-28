import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Header.module.css'

import DiceIcon from '../../resources/icons/dice.svg'
import { fetchLogout } from '../../shared/fetchs/fetchs'

import {
    setFavourites,
    setRecent,
    setRecommended,
} from '../../redux/actions/data'

import { useDispatch } from 'react-redux'

const HeaderMain = ({
    setIsLoginModalVisible,
    setIsRegistrationModalVisible,
    token,
    setToken,
}) => {
    const dispatch = useDispatch()

    return (
        <div className={styles['container']}>
            <div className={styles['main-page-container']}>
                <Link to={'/game/original_dice_game'}>
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
                            onClick={() => {
                                fetchLogout(token)
                                    .then(res => {
                                        if (res.ok) {
                                            setToken(null)
                                            dispatch(setFavourites([]))
                                        }
                                    })
                                    .finally(() => {
                                        setToken(null)
                                        dispatch(setFavourites([]))
                                        dispatch(setRecent([]))
                                        dispatch(setRecommended([]))
                                    })
                            }}
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
        </div>
    )
}

export default HeaderMain

HeaderMain.propTypes = {
    setIsLoginModalVisible: PropTypes.func,
    setIsRegistrationModalVisible: PropTypes.func,
    token: PropTypes.string,
    setToken: PropTypes.func,
}
