import React, { useEffect, useState } from 'react'

import styles from './AllGames.module.css'

import GamesContainer from './GamesContainer/GamesContainer'
import { useSelector } from 'react-redux'
import { allGamesSelector } from './AllGames.selector.js'

function AllGames() {
    const { tags, allGames } = useSelector(allGamesSelector)

    const [tagsGames, setTagsGames] = useState([])

    useEffect(() => {
        for (let tag of tags) {
            const games = allGames.filter(game => game.tags.includes(tag.id))

            if (games.length !== 0) {
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
            {tagsGames.map(item => (
                <GamesContainer
                    key={item.tag.id}
                    numberToDisplay={4}
                    title={item.tag.name}
                    icon={item.icon}
                    games={item.games}
                />
            ))}
        </div>
    )

    return <div className={styles['container']}>{renderAllGames()}</div>
}

export default AllGames
