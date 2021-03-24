import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ExitLogo } from '../icons/exit.svg'
import { ReactComponent as Eye } from '../icons/eye.svg'
import { ReactComponent as EyeNo } from '../icons/eye_no.svg'

import styles from './Modal.module.css'

const LoginModal = ({
    setIsLoginModalVisible,
    setIsRegistrationModalVisible,
    setToken,
}) => {
    const [isPaswordShow, setIsPaswordShow] = useState(false)
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
        fetch('https://virtual-sports-yi3j9.ondigitalocean.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
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
                setLoginError('Oшыбка сети')
                console.log(err)
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
                    <span></span>
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
                            type={isPaswordShow ? 'text' : 'password'}
                            autoComplete="current-password"
                        />
                        <span
                            className={styles.eys}
                            onClick={() => setIsPaswordShow(!isPaswordShow)}
                        >
                            {isPaswordShow ? <Eye /> : <EyeNo />}
                        </span>
                    </div>
                    <span>{loginError}</span>
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
