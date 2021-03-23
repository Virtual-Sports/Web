import React from 'react'
import styles from './GameCard.module.css'
import PropTypes from 'prop-types'

const GameCard = ({ title, img }) => {
    return (
        <div className={styles.card}>
            <img src={img ?? 'https://via.placeholder.com/250x250'} />
            <p className={styles.description}>{title ?? 'no title'}</p>
        </div>
    )
}

GameCard.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
}

export default GameCard
