import React, { useState, useEffect } from 'react'

import styles from './Dice.module.css'

import { ReactComponent as Dice1 } from '../../resources/icons/dice1.svg'
import { ReactComponent as Dice2 } from '../../resources/icons/dice2.svg'
import { ReactComponent as Dice3 } from '../../resources/icons/dice3.svg'
import { ReactComponent as Dice4 } from '../../resources/icons/dice4.svg'
import { ReactComponent as Dice5 } from '../../resources/icons/dice5.svg'
import { ReactComponent as Dice6 } from '../../resources/icons/dice6.svg'

import HeaderGame from '../Header/HeaderGame'
import DiceImg from '../../resources/images/dice.png'

import LoginModal from '../../shared/modals/LoginModal'
import RegistrationModal from '../../shared/modals/RegistrationModal'
import useToken from '../../shared/hooks/useToken'
import { fetchMakeBet, fetchGetHistory } from '../../shared/fetchs/fetchs'
import { dice as messages } from '../../shared/messages'

function Dice() {
    const [bet, setBet] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [showHistory, setShowHistory] = useState(false)
    const [historyData, setHistoryData] = useState([])
    const [result, setResult] = useState(null)
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
    const [
        isRegistrationModalVisible,
        setIsRegistrationModalVisible,
    ] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false)
    const [count, setCount] = useState(0)

    const { token, setToken } = useToken()

    const getHistory = () => {
        fetchGetHistory(token)
            .then(data => data.json())
            .then(body => {
                setHistoryData(body.reverse())
            })
            .catch(err => console.log(err))
    }

    const placeBet = () => {
        if (bet === null || isLoading) {
            return
        }
        setLoading(true)
        setResult(null)
        if (!token) {
            setTimeout(() => {
                setResult(Math.floor(Math.random() * 6))
                setLoading(false)
                setCount(count + 1)
                if (count === 2) {
                    setShowPopUp(true)
                    setCount(0)
                }
            }, 2000)
        } else {
            fetchMakeBet(bet, token)
                .then(data => data.json())
                .then(body => {
                    setResult(Number(body.droppedNumber) - 1)
                    setLoading(false)
                    getHistory()
                })
                .catch(err => console.log(err))
        }
    }
    const showHistoryHandler = e => {
        e.stopPropagation()
        token !== null && setShowHistory(true)
    }

    const resultImg = win => {
        switch (result) {
            case 0:
                return (
                    <Dice1
                        className={
                            win
                                ? `${styles.img} ${styles.green}`
                                : `${styles.img} ${styles.red}`
                        }
                    />
                )
            case 1:
                return (
                    <Dice2
                        className={
                            win
                                ? `${styles.img} ${styles.green}`
                                : `${styles.img} ${styles.red}`
                        }
                    />
                )
            case 2:
                return (
                    <Dice3
                        className={
                            win
                                ? `${styles.img} ${styles.green}`
                                : `${styles.img} ${styles.red}`
                        }
                    />
                )
            case 3:
                return (
                    <Dice4
                        className={
                            win
                                ? `${styles.img} ${styles.green}`
                                : `${styles.img} ${styles.red}`
                        }
                    />
                )
            case 4:
                return (
                    <Dice5
                        className={
                            win
                                ? `${styles.img} ${styles.green}`
                                : `${styles.img} ${styles.red}`
                        }
                    />
                )
            case 5:
                return (
                    <Dice6
                        className={
                            win
                                ? `${styles.img} ${styles.green}`
                                : `${styles.img} ${styles.red}`
                        }
                    />
                )
            default:
                return <Dice6 className={styles.img} />
        }
    }

    const isBetWin = () => {
        if ([0, 1, 2, 3, 4, 5].includes(bet) && bet === Number(result)) {
            return true
        } else if (bet === 6 && [1, 3, 5].includes(result)) {
            return true
        } else if (bet === 7 && [0, 2, 4].includes(result)) {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        getHistory()
    }, [token])

    const getBetValue = betIndex => {
        switch (betIndex) {
            case 0:
                return 1
            case 1:
                return 2
            case 2:
                return 3
            case 3:
                return 4
            case 4:
                return 4
            case 5:
                return 6
            case 6:
                return messages.even
            case 7:
                return messages.odd
            default:
                return 1
        }
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <HeaderGame
                    title={messages.dice}
                    gameId="original_dice_game"
                    token={token}
                />
                <div className={styles.select}>
                    <p>Сделайте ставку</p>
                    <div className={styles.selectRow}>
                        <div>
                            <input
                                type="radio"
                                id="choice1"
                                name="dice"
                                value={0}
                                onChange={e => {
                                    setBet(Number(e.target.value))
                                    setResult(null)
                                }}
                                disabled={isLoading}
                            />
                            <label htmlFor="choice1">
                                <Dice1 className={styles.svg} />
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="choice2"
                                name="dice"
                                value={1}
                                onChange={e => {
                                    setBet(Number(e.target.value))
                                    setResult(null)
                                }}
                                disabled={isLoading}
                            />
                            <label htmlFor="choice2">
                                <Dice2 className={styles.svg} />
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="choice3"
                                name="dice"
                                value={2}
                                onChange={e => {
                                    setBet(Number(e.target.value))
                                    setResult(null)
                                }}
                                disabled={isLoading}
                            />
                            <label htmlFor="choice3">
                                <Dice3 className={styles.svg} />
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="choice4"
                                name="dice"
                                value={3}
                                onChange={e => {
                                    setBet(Number(e.target.value))
                                    setResult(null)
                                }}
                                disabled={isLoading}
                            />
                            <label htmlFor="choice4">
                                <Dice4 className={styles.svg} />
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="choice5"
                                name="dice"
                                value={4}
                                onChange={e => {
                                    setBet(Number(e.target.value))
                                    setResult(null)
                                }}
                                disabled={isLoading}
                            />
                            <label htmlFor="choice5">
                                <Dice5 className={styles.svg} />
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="choice6"
                                name="dice"
                                value={5}
                                onChange={e => {
                                    setBet(Number(e.target.value))
                                    setResult(null)
                                }}
                                disabled={isLoading}
                            />
                            <label htmlFor="choice6">
                                <Dice6 className={styles.svg} />
                            </label>
                        </div>
                    </div>
                    <div className={styles.selectRow}>
                        <div>
                            <input
                                type="radio"
                                id="choiceOdd"
                                name="dice"
                                value={7}
                                onChange={e => {
                                    setBet(Number(e.target.value))
                                    setResult(null)
                                    setLoading(false)
                                }}
                                disabled={isLoading}
                            />
                            <label htmlFor="choiceOdd">{messages.odds}</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="choicePair"
                                name="dice"
                                value={6}
                                onChange={e => {
                                    setBet(Number(e.target.value))
                                    setResult(null)
                                    setLoading(false)
                                }}
                                disabled={isLoading}
                            />
                            <label htmlFor="choicePair">{messages.evens}</label>
                        </div>
                    </div>
                </div>
                {result !== null ? (
                    resultImg(isBetWin())
                ) : (
                    <img
                        className={
                            isLoading
                                ? `${styles.img} ${styles.isLoading}`
                                : styles.img
                        }
                        src={DiceImg}
                        title="dice"
                    />
                )}
                <div className={styles.buttonWrapper} onClick={placeBet}>
                    <p
                        onClick={bet === null || (isLoading && placeBet)}
                        className={
                            bet === null || isLoading
                                ? `${styles['button']} ${styles.disabled}`
                                : `${styles['button']} `
                        }
                    >
                        {messages.bet}
                    </p>
                    {token && (
                        <p
                            className={
                                historyData.length === 0
                                    ? `${styles['button']} ${styles.disabled}`
                                    : `${styles['button']} `
                            }
                            onClick={e => showHistoryHandler(e)}
                        >
                            {messages.history}
                        </p>
                    )}
                </div>
                {showHistory && (
                    <div className={styles.history}>
                        <button
                            onClick={e => {
                                setShowHistory(false)
                                e.stopPropagation()
                            }}
                        >
                            X
                        </button>
                        <h1>{messages.history}</h1>
                        <br />
                        <ol className={styles.historyList}>
                            {historyData.map(historyItem => {
                                return (
                                    <li
                                        key={historyItem.id}
                                        className={styles.historyListItem}
                                    >
                                        <div>
                                            {' '}
                                            <span>{messages.date}:</span>
                                            <span>
                                                {historyItem.dateTime}
                                            </span>{' '}
                                        </div>
                                        <div>
                                            <span>{messages.bet}:</span>
                                            <span>
                                                {' '}
                                                {getBetValue(
                                                    historyItem.betType
                                                )}
                                            </span>
                                        </div>
                                        <div>
                                            <span>{messages.result}:</span>{' '}
                                            <span>
                                                {' '}
                                                {historyItem.droppedNumber}
                                            </span>
                                        </div>
                                        <div>
                                            <span>
                                                {messages.bet}
                                                {historyItem.isBetWon
                                                    ? ''
                                                    : ` ${messages.not} `}
                                                {messages.success}:
                                            </span>
                                            <span>
                                                {' '}
                                                {historyItem.isBetWon
                                                    ? '✅'
                                                    : '❌'}
                                            </span>
                                        </div>
                                        <hr />
                                    </li>
                                )
                            })}
                        </ol>{' '}
                    </div>
                )}
            </div>
            {isLoginModalVisible && (
                <LoginModal
                    setToken={setToken}
                    setIsLoginModalVisible={setIsLoginModalVisible}
                    setIsRegistrationModalVisible={
                        setIsRegistrationModalVisible
                    }
                />
            )}
            {isRegistrationModalVisible && (
                <RegistrationModal
                    setToken={setToken}
                    setIsRegistrationModalVisible={
                        setIsRegistrationModalVisible
                    }
                />
            )}
            {showPopUp && (
                <div className={styles.popUpWrapper}>
                    <div className={styles.popUp}>
                        <button
                            onClick={() => setShowPopUp(false)}
                            className={styles.close}
                        >
                            X
                        </button>
                        <h3>
                            {messages.loginOrRegisterAnd}
                            <b>{messages.checkYourLuck}</b>
                        </h3>
                        <p>
                            <button
                                className={styles.login}
                                onClick={() => {
                                    setShowPopUp(false)
                                    setIsLoginModalVisible(true)
                                }}
                            >
                                {messages.login}
                            </button>
                        </p>
                        <p>
                            <button
                                className={`${styles.login} ${styles.yellow}`}
                                onClick={() => {
                                    setShowPopUp(false)
                                    setIsRegistrationModalVisible(true)
                                }}
                            >
                                {messages.registration}
                            </button>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dice
