import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { ReactComponent as Dice1 } from '../../resources/icons/dice1.svg'
import { ReactComponent as Dice2 } from '../../resources/icons/dice2.svg'
import { ReactComponent as Dice3 } from '../../resources/icons/dice3.svg'
import { ReactComponent as Dice4 } from '../../resources/icons/dice4.svg'
import { ReactComponent as Dice5 } from '../../resources/icons/dice5.svg'
import { ReactComponent as Dice6 } from '../../resources/icons/dice6.svg'
import useToken from '../../shared/hooks/useToken'
import DiceImg from '../../resources/images/dice.png'
import { WEB_MOBILE, WEB_DESKTOP } from '../../shared/constants'

import styles from './Dice.module.css'

function Dice() {
    const [bet, setBet] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [showHistory, setShowHistory] = useState(false)
    const [historyData, setHistoryData] = useState([])
    const [result, setResult] = useState(null)

    const { token } = useToken()

    const platform = window.navigator.userAgentData.mobile
        ? WEB_MOBILE
        : WEB_DESKTOP

    const getHistory = () => {
        fetch('https://virtual-sports-yi3j9.ondigitalocean.app/User/history', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Platform': platform,
                Authorization: `Bearer ${token}`,
            },
        })
            .then(data => data.json())
            .then(body => {
                setHistoryData(body)
            })
            .catch(err => console.log(err))
    }

    const placeBet = () => {
        setLoading(true)
        setResult(null)
        if (!token) {
            setTimeout(() => {
                setResult(Math.floor(Math.random() * 6))
                setLoading(false)
            }, 1000)
            return
        }

        const formData = {
            dateTime: moment().format('DD-MM-YYYY hh:mm:ss'),
            betType: bet,
        }

        fetch(
            'https://virtual-sports-yi3j9.ondigitalocean.app/Games/play/dice',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Platform': `${platform}`,
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            }
        )
            .then(data => data.json())
            .then(body => {
                setResult(Number(body.droppedNumber) - 1)
                setLoading(false)
                getHistory()
            })
            .catch(err => console.log(err))
    }

    const showHistoryHandler = () => {
        setShowHistory(true)
    }

    const resultImg = () => {
        switch (result) {
            case 0:
                return <Dice1 className={styles.img} />
            case 1:
                return <Dice2 className={styles.img} />
            case 2:
                return <Dice3 className={styles.img} />
            case 3:
                return <Dice4 className={styles.img} />
            case 4:
                return <Dice5 className={styles.img} />
            case 5:
                return <Dice6 className={styles.img} />
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
    }, [])

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
                return 'НЕЧЕТ'
            case 7:
                return 'ЧЕТ'
            default:
                return 1
        }
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Link to={'/'}> X </Link>
                    <h3>DICE GAME</h3>
                    <span></span>
                </div>

                <div className={styles.select}>
                    <p>Сделайте ставку</p>
                    <div className={styles.selectRow}>
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
                    <div className={styles.selectRow}>
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
                        <label htmlFor="choiceOdd">Нечетные</label>
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
                        <label htmlFor="choicePair">Четные</label>
                    </div>
                </div>
                {result !== null ? (
                    resultImg()
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
                {result !== null && (
                    <h1 className={styles.result}>
                        {isBetWin() ? 'ПОБЕДА !!!' : 'ПОРАЖЕНИЕ'}
                    </h1>
                )}
                <div className={styles.buttonWrapper}>
                    <button
                        className={styles.button}
                        onClick={placeBet}
                        disabled={bet === null || isLoading}
                    >
                        Ставка
                    </button>
                    {token && (
                        <button
                            className={styles.button}
                            onClick={showHistoryHandler}
                        >
                            История
                        </button>
                    )}
                </div>
                {showHistory && (
                    <div className={styles.history}>
                        <button onClick={() => setShowHistory(false)}>X</button>
                        <h1>История</h1>
                        <br />
                        <ol className={styles.historyList}>
                            {historyData.map(historyItem => {
                                return (
                                    <li
                                        key={historyItem.id}
                                        className={styles.historyListItem}
                                    >
                                        <p> Дата: {historyItem.dateTime}</p>
                                        <p>
                                            Ставка:{' '}
                                            {getBetValue(historyItem.betType)} -
                                            Результат:{' '}
                                            {historyItem.droppedNumber} ПОБЕДА:{' '}
                                            {historyItem.isBetWon ? '✅' : '❌'}
                                        </p>
                                        <hr />
                                    </li>
                                )
                            })}
                        </ol>{' '}
                    </div>
                )}
            </div>
        </>
    )
}

export default Dice
