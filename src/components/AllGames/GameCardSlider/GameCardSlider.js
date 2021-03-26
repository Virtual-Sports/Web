import React from 'react'
import styles from './GameCardSlider.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const GameCardSlider = ({ id, title, img }) => {
    const defaultImageUrl = 'https://via.placeholder.com/250x250' // TODO: move to another file with constants
    const defaultTitle = 'no title' // TODO: move to another file with constants

    const handleError = e => {
        e.target.onerror = null
        e.target.src = defaultImageUrl
    }

    return (
        <Link className={styles.card} to={`/game/${id}`}>
            <img
                className={styles.img}
                src={img ?? defaultImageUrl}
                onError={handleError}
            />
            <p className={styles.description}>{title ?? defaultTitle}</p>
        </Link>
    )
}

GameCardSlider.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
}

export default GameCardSlider
