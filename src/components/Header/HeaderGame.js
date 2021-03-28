import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { favouritesGamesSelector } from '../AllGames/FavouritesGames.selector'
import styles from './Header.module.css'

import { fetchFavourites, fetchRecent } from '../../redux/actions/data'
import ArrowBack from '../../resources/icons/back.svg'
import {
    fetchAddToFavorite,
    fetchRemoveFromFavorite,
    fetchAddGameToRecent,
} from '../../shared/fetchs/fetchs'
import { ReactComponent as HeartImg } from '../../resources/icons/Heart.svg'
import useToken from '../../shared/hooks/useToken'

const HeaderGame = ({ title = 'Game', gameId }) => {
    const dispatch = useDispatch()
    const { favouritesGames } = useSelector(favouritesGamesSelector)
    const [isFav, setIsFav] = useState(
        favouritesGames.findIndex(item => item.id === gameId)
    )

    const { token } = useToken()

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
        dispatch(fetchFavourites(token))
    }

    useEffect(() => {
        fetchAddGameToRecent(gameId, token)
            .then(res => {
                if (res.ok) {
                    dispatch(fetchRecent(token))
                }
            })
            .catch(err => console.log(`Erorr: ${err}`))
    }, [])

    return (
        <div className={styles['container']}>
            <div className={styles['game']}>
                <Link to={'/'}>
                    <img src={ArrowBack} alt="back-arrow" />
                </Link>
                <p>{title}</p>
                <HeartImg
                    className={
                        isFav === -1
                            ? styles.heart
                            : `${styles.heart} ${styles.fav}`
                    }
                    onClick={heartClick}
                />
            </div>
        </div>
    )
}

export default HeaderGame

HeaderGame.propTypes = {
    title: PropTypes.string,
    gameId: PropTypes.string,
}
