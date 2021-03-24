import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './MainPage.module.css'

import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import AllGames from '../AllGames/AllGames'
import { fetchData } from '../../redux/actions/data'

function MainPage() {
    const dispatch = useDispatch()

    const filtersVisibility = useSelector(
        state => state.filters.areFiltersVisible
    )
    const categories = useSelector(state => state.data.categories)
    const providers = useSelector(state => state.data.providers)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <div className={styles['container']}>
            <Header isMainPage={true} />

            <div className={styles['main-content']}>
                <div className={styles['sidebar']}>
                    <Sidebar categories={categories} providers={providers} />
                </div>

                {!filtersVisibility ? (
                    <div className={styles['games-container']}>
                        <AllGames />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default MainPage
