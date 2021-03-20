import React from 'react'

import styles from './MainPage.module.css'
import Sidebar from '../Sidebar/Sidebar'

function MainPage() {
    return (
        <div className={styles['container']}>
            <div className={styles['sidebar']}>
                <Sidebar />
            </div>
            <div className={styles['games-container']}></div>
        </div>
    )
}

export default MainPage
