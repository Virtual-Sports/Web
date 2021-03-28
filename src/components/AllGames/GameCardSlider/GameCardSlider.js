import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './GameCardSlider.module.css'

import DEFAULT_GAME_PHOTO from '../../../resources/icons/default-game.svg'
import { DEFAULT_GAME_TITLE } from '../../../shared/constants'

const GameCardSlider = ({
    id,
    title = DEFAULT_GAME_TITLE,
    image = DEFAULT_GAME_PHOTO,
}) => {
    const handleError = e => {
        e.target.onerror = null
        e.target.src = DEFAULT_GAME_PHOTO
    }

    return (
        <Link className={styles.card} to={`/game/${id}`}>
            <img
                className={styles.img}
                src={image}
                onError={handleError}
                alt="game-photo"
            />
            <p className={styles.description}>{title}</p>
        </Link>
    )
}

GameCardSlider.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
}

export default GameCardSlider
