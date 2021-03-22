import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './MainPage.module.css'

import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import AllGames from '../AllGames/AllGames'

import { INITIALIZE } from '../../store/actions'
import { CONFIG } from '../../config'

MainPage.propTypes = {
    initialize: PropTypes.func,
}

function MainPage({ initialize }) {
    const categories = useSelector(state => state.categories)
    const providers = useSelector(state => state.providers)
    // const tags = useSelector(state => state.tags)
    // const games = useSelector(state => state.games)

    useEffect(() => {
        initialize(CONFIG)
    }, [])

    return (
        <div className={styles['container']}>
            <Header />

            <div className={styles['main-content']}>
                <div className={styles['sidebar']}>
                    <Sidebar categories={categories} providers={providers} />
                </div>
                <div className={styles['games-container']}>
                    <AllGames />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    providers: state.providers,
    categories: state.categories,
    tags: state.tags,
    games: state.games,
})

const mapDispatchToProps = dispatch => ({
    initialize: data => dispatch(INITIALIZE(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)
