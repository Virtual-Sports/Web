import React from 'react'
import PropTypes from 'prop-types'

import styles from './GamesContainer.module.css'

import GameCard from '../GameCard/GameCard'
// import { useSelector } from 'react-redux'
// import { filtersSelector } from '../Filters.selector.js'

GamesContainer.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired,
}

function GamesContainer({ title, games, icon = null }) {
    /* const { selectedCategory, selectedProviders } = useSelector(filtersSelector)

    const gamesToDisplay = () => {
        let tmpGame = games

        tmpGame = selectedCategory
            ? tmpGame.filter(g => g.category.includes(selectedCategory))
            : tmpGame

        tmpGame =
            selectedProviders.length > 0
                ? tmpGame.filter(g => selectedProviders.includes(g.provider))
                : tmpGame

        return tmpGame
    } */

    return (
        <>
            {games.length > 0 && (
                <div className={styles['container']}>
                    <div className={styles['header']}>
                        {icon ?? <img src={icon} alt="icon" />}
                        <h2 className={styles['title']}>
                            {title} [{games.length}]
                        </h2>
                    </div>

                    <div className={styles['games']}>
                        {games.map(game => (
                            <GameCard
                                key={game.id}
                                id={game.id}
                                title={game.displayName}
                                img={game.image}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default GamesContainer
