import React, { useEffect, useState } from 'react'

import styles from './AllGames.module.css'

import GamesContainer from './GamesContainer/GamesContainer'
import { useSelector } from 'react-redux'
import { allGamesSelector } from './AllGames.selector.js'
import { filtersSelector } from './Filters.selector.js'

function AllGames() {
    const { tags, allGames } = useSelector(allGamesSelector)
    const { selectedCategory, selectedProviders } = useSelector(filtersSelector)

    const [tagsGames, setTagsGames] = useState([])

    const filteredGames = games => {
        let tmpGame = [...games]

        tmpGame = selectedCategory
            ? tmpGame.filter(g => g.category.includes(selectedCategory))
            : tmpGame

        tmpGame =
            selectedProviders.length > 0
                ? tmpGame.filter(g => selectedProviders.includes(g.provider))
                : tmpGame

        return tmpGame
    }

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log('useEffect')
        for (let tag of tags) {
            const games = allGames.filter(game => game.tags.includes(tag.id))

            if (games.length > 0) {
                setTagsGames(prev => [
                    ...prev,
                    {
                        tag,
                        icon: tag.icon ? tag.icon : null,
                        games: allGames.filter(game =>
                            game.tags.includes(tag.id)
                        ),
                    },
                ])
            }
        }
    }, [tags, allGames])

    const renderAllGames = () => (
        <div className={styles['tags']}>
            {selectedCategory || selectedProviders.length > 0
                ? 'Применен фильтр'
                : ''}

            {tagsGames.map(item => (
                <GamesContainer
                    key={item.tag.id}
                    title={item.tag.name}
                    icon={item.icon}
                    games={filteredGames(item.games)}
                    isFiltered={
                        selectedCategory || selectedProviders.length > 0
                    }
                />
            ))}
        </div>
    )

    return <div className={styles['container']}>{renderAllGames()}</div>
}

export default AllGames
