import React, { useEffect, useState } from 'react'

import styles from './AllGames.module.css'

import { CONFIG } from '../../config'
import GamesContainer from './GamesContainer/GamesContainer'

function AllGames() {
    const tags = CONFIG.tags
    const allGames = CONFIG.games

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

    // eslint-disable-next-line no-console
    console.log(tagsGames)

    return (
        <div className={styles['container']}>
            <div className={styles['tags']}>
                {tagsGames.map(item => (
                    <div key={item.tag.id}>
                        <GamesContainer
                            key={item.tag.id}
                            numberToDisplay={4}
                            title={item.tag.name}
                            icon={item.icon}
                            games={item.games}
                        />

                        <GamesContainer
                            key={item.tag.id}
                            title={item.tag.name}
                            icon={item.icon}
                            games={item.games}
                        />

                        <GamesContainer
                            key={item.tag.id}
                            title={item.tag.name}
                            icon={item.icon}
                            games={item.games}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllGames
