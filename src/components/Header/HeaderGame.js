import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { customGamesSelector } from '../AllGames/CustomGames.selector'
import styles from './Header.module.css'

import {
    fetchFavourites,
    fetchRecent,
    fetchRecommended,
} from '../../redux/actions/data'

import ArrowBack from '../../resources/icons/back.svg'
import { ReactComponent as HeartImg } from '../../resources/icons/Heart.svg'

import {
    fetchAddToFavorite,
    fetchRemoveFromFavorite,
    fetchAddGameToRecent,
} from '../../shared/fetchs/fetchs'
import useToken from '../../shared/hooks/useToken'

const HeaderGame = ({ title = 'Game', gameId }) => {
    const dispatch = useDispatch()
    const { favouriteGames } = useSelector(customGamesSelector)
    const [isFav, setIsFav] = useState(
        favouriteGames.findIndex(item => item.id === gameId)
    )

    const { token } = useToken()

    const reloadFavourites = () => {
        dispatch(fetchFavourites(token))
    }

    const heartClick = () => {
        if (isFav === -1) {
            fetchAddToFavorite(gameId, token).then(
                response => response.ok && setIsFav(1)
            )
        } else {
            fetchRemoveFromFavorite(gameId, token).then(
                response => response.ok && setIsFav(-1)
            )
        }
    }

    useEffect(() => {
        fetchAddGameToRecent(gameId, token)
            .then(res => {
                if (res.ok) {
                    dispatch(fetchRecent(token))
                    dispatch(fetchRecommended(token))
                }
            })
            .catch(err => console.log(`Erorr: ${err}`))
    }, [])

    return (
        <div className={styles['container']}>
            <div className={styles['game']}>
                <div className={styles['game-title']}>
                    <Link to={'/'} onClick={reloadFavourites}>
                        <img src={ArrowBack} alt="back-arrow" />
                    </Link>
                    <p>{title}</p>
                </div>

                <div>
                    {token && (
                        <HeartImg
                            className={
                                isFav === -1
                                    ? styles.heart
                                    : `${styles.heart} ${styles.fav}`
                            }
                            onClick={heartClick}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeaderGame

HeaderGame.propTypes = {
    title: PropTypes.string,
    gameId: PropTypes.string,
}
