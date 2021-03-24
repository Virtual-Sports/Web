import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Dice.module.css'
import { ReactComponent as Dice1 } from '../components/icons/dice1.svg'
import { ReactComponent as Dice2 } from '../components/icons/dice2.svg'
import { ReactComponent as Dice3 } from '../components/icons/dice3.svg'
import { ReactComponent as Dice4 } from '../components/icons/dice4.svg'
import { ReactComponent as Dice5 } from '../components/icons/dice5.svg'
import { ReactComponent as Dice6 } from '../components/icons/dice6.svg'
import DiceImg from '../img/dice.png'
import useToken from '../components/hooks/useToken'

function Dice() {
    const [bet, setBet] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [result, setResult] = useState(null)
    const { token } = useToken()

    const placeBet = () => {
        if (!token) {
            setLoading(true)
            setResult(null)
            setTimeout(() => {
                setResult(Math.floor(Math.random() * 6))
                setLoading(false)
            }, 1000)
            return
        }
        // TODO: add work with API
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

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Link to={'/'}> BACK</Link>
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
                    <h1>{isBetWin() ? 'YOU WIN !!!' : 'YOU LOSE'}</h1>
                )}
                <button
                    className={styles.button}
                    onClick={placeBet}
                    disabled={bet === null || isLoading}
                >
                    Ставка
                </button>
                {token && (
                    <button className={styles.button} onClick={showHistory}>
                        История
                    </button>
                )}
            </div>
        </>
    )
}

export default Dice
