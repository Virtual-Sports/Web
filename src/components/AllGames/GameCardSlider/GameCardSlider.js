import React from 'react'
import styles from './GameCardSlider.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const defaultImageUrl = 'https://via.placeholder.com/250x250'

const GameCardSlider = ({
    id,
    title = 'no title',
    image = defaultImageUrl,
}) => {
    const handleError = e => {
        e.target.onerror = null
        e.target.src = defaultImageUrl
    }

    return (
        <Link className={styles.card} to={`/game/${id}`}>
            <img className={styles.img} src={image} onError={handleError} />
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
