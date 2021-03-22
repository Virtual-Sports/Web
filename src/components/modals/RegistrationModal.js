import React, { useState } from 'react'
import styles from './Modal.module.css'
import PropTypes from 'prop-types'
import { ReactComponent as ExitLogo } from '../icons/exit.svg'
import { ReactComponent as Eye } from '../icons/eye.svg'
import { ReactComponent as EyeNo } from '../icons/eye_no.svg'

const RegistrationModal = ({ setIsRegistrationModalVisible, setToken }) => {
    const [isPaswordShow, setIsPaswordShow] = useState(false)
    const [isPasword2Show, setIsPasword2Show] = useState(false)
    const [isPassSame, setIsPassSame] = useState(true)
    const [registrationError, setRegistrationError] = useState('')
    const [email, setEmail] = useState('')
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')

    const formData = {
        email,
        username: 'qw@gmail.com',
        password: pass1,
    }

    const passAlert = () => {
        if (pass1 !== pass2) {
            setIsPassSame(false)
        }
    }

    const registration = async e => {
        e.preventDefault()
        await fetch(
            'https://radiant-temple-07706.herokuapp.com/auth/local/register',
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }
        )
            .then(data => data.json())
            .then(body => {
                if (body.jwt) {
                    setToken(body.jwt)
                    setIsRegistrationModalVisible(false)
                } else {
                    setToken(null)
                    setRegistrationError('Email уже занят')
                }
            })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.containerHeader}>
                    <button
                        className={styles.closeButton}
                        onClick={() => setIsRegistrationModalVisible(false)}
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
                    onSubmit={e => registration(e)}
                >
                    <input
                        className={styles.input}
                        placeholder="Введите email"
                        onChange={e => {
                            setEmail(e.target.value)
                            setRegistrationError('')
                        }}
                        type="email"
                        autoComplete="email"
                    />
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            placeholder="Введите пароль (мин 8 символов)"
                            onChange={e => {
                                setPass1(e.target.value)
                                setIsPassSame(true)
                            }}
                            minLength={8}
                            autoComplete="new-password"
                            type={isPaswordShow ? 'text' : 'password'}
                        />
                        <span
                            className={styles.eys}
                            onClick={() => setIsPaswordShow(!isPaswordShow)}
                        >
                            {isPaswordShow ? <Eye /> : <EyeNo />}
                        </span>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            placeholder="Повторите пароль"
                            onChange={e => {
                                setPass2(e.target.value)
                                setIsPassSame(true)
                            }}
                            minLength={8}
                            autoComplete="new-password"
                            type={isPasword2Show ? 'text' : 'password'}
                        />
                        <span
                            className={styles.eys}
                            onClick={() => setIsPasword2Show(!isPasword2Show)}
                        >
                            {isPasword2Show ? <Eye /> : <EyeNo />}
                        </span>
                    </div>
                    <span>{registrationError}</span>
                    {!isPassSame && <span>Пароли должны совпадать!</span>}
                    <button
                        type={pass1 !== pass2 ? 'button' : 'submit'}
                        className={styles.buttonLogin}
                        onClick={passAlert}
                        disabled={!email || !pass1 || !pass2 || !isPassSame}
                    >
                        Регистрация
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegistrationModal

RegistrationModal.propTypes = {
    setIsRegistrationModalVisible: PropTypes.func,
    setToken: PropTypes.func,
}
