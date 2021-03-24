import React, { useEffect, useState } from 'react'

import styles from './AllGames.module.css'

import GamesContainer from './GamesContainer/GamesContainer'
import { useSelector } from 'react-redux'

function AllGames() {
    const tags = useSelector(state => state.data.data.tags)
    const allGames = useSelector(state => state.data.data.games)

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
    )

    return <div className={styles['container']}>{renderAllGames()}</div>
}

export default AllGames
