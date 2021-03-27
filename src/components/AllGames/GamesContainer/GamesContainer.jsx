/* eslint-disable no-console */
import React from 'react'
import PropTypes from 'prop-types'

import styles from './GamesContainer.module.css'

import GameCard from '../GameCard/GameCard'
import { useSelector } from 'react-redux'
import { filtersSelector } from '../Filters.selector.js'

GamesContainer.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired,
}

function GamesContainer({ title, games, icon = null }) {
    const { selectedCategory, selectedProviders } = useSelector(filtersSelector)

    console.log(selectedProviders, selectedCategory)

    const gamesToDisplay = () => {
        return games.filter(
            game =>
                game.category.includes(selectedCategory) &&
                (selectedProviders.length > 0 &&
                    selectedProviders.includes(game.provider))
        )
    }

    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                {icon ?? <img src={icon} alt="icon" />}
                <h2 className={styles['title']}>{title}</h2>
            </div>

            <div className={styles['games']}>
                {/* {JSON.stringify(gamesToDisplay())} */}
                {gamesToDisplay().map(game => (
                    <GameCard
                        key={game.id}
                        id={game.id}
                        title={game.displayName}
                        img={game.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default GamesContainer
