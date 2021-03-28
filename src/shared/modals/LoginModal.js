import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ExitLogo } from '../../resources/icons/exit.svg'
import { ReactComponent as Eye } from '../../resources/icons/eye.svg'
import { ReactComponent as EyeNo } from '../../resources/icons/eye_no.svg'

import styles from './Modal.module.css'
import { fetchLogin } from '../../shared/fetchs/fetchs'

const LoginModal = ({
    setIsLoginModalVisible,
    setIsRegistrationModalVisible,
    setToken,
}) => {
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    const [loginError, setLoginError] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const formData = {
        login: email,
        password: pass,
    }

    const login = e => {
        e.preventDefault()
        fetchLogin(formData)
            .then(async response => {
                if (response.status === 200) {
                    const resParsed = await response.text()
                    setToken(resParsed)
                    setIsLoginModalVisible(false)
                } else if (response.status === 404) {
                    const resParsed = await response.text()
                    setLoginError(resParsed)
                }
            })
            .catch(err => {
                setLoginError('Oшибка сети ', err)
            })
            .finally(setIsLoading(false))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.containerHeader}>
                    <button
                        className={styles.closeButton}
                        onClick={() => setIsLoginModalVisible(false)}
                    >
                        <ExitLogo className={styles.svg} />
                    </button>
                    <p>Вход</p>
                </div>
            </div>
            <div className={styles.formWrapper}>
                <form
                    className={styles.formBlock}
                    onSubmit={e => {
                        setIsLoading(true)
                        login(e)
                    }}
                >
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="Введите email"
                        onChange={e => {
                            setEmail(e.target.value)
                            setLoginError('')
                        }}
                        autoComplete="email"
                    />
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            placeholder="Введите пароль (мин 8 символов)"
                            onChange={e => {
                                setPass(e.target.value)
                                setLoginError('')
                            }}
                            minLength={8}
                            maxLength={20}
                            type={isPasswordShow ? 'text' : 'password'}
                            autoComplete="current-password"
                        />
                        <span
                            className={styles.eys}
                            onClick={() => setIsPasswordShow(!isPasswordShow)}
                        >
                            {isPasswordShow ? <Eye /> : <EyeNo />}
                        </span>
                    </div>
                    <span className={styles.error}>{loginError}</span>
                    <button
                        type="submit"
                        className={styles.buttonLogin}
                        disabled={!email || !pass || isLoading || loginError}
                    >
                        {isLoading ? 'Загрузка...' : 'Вход'}
                    </button>
                    <button
                        className={styles.buttonRegistration}
                        onClick={() => {
                            setIsLoginModalVisible(false),
                                setIsRegistrationModalVisible(true)
                        }}
                    >
                        Регистрация
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginModal

LoginModal.propTypes = {
    setIsLoginModalVisible: PropTypes.func,
    setIsRegistrationModalVisible: PropTypes.func,
    setToken: PropTypes.func,
}
