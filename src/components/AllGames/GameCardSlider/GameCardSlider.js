import React from 'react'
import styles from './GameCardSlider.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { DEFAULT_IMAGE, NO_TITLE } from '../../../shared/constants'

const GameCardSlider = ({ id, title = NO_TITLE, img = DEFAULT_IMAGE }) => {
    const handleError = e => {
        e.target.onerror = null
        e.target.src = DEFAULT_IMAGE
    }

    return (
        <Link className={styles.card} to={`/game/${id}`}>
            <img className={styles.img} src={img} onError={handleError} />
            <p className={styles.description}>{title}</p>
        </Link>
    )
}

GameCardSlider.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    img: PropTypes.string,
}

export default GameCardSlider
