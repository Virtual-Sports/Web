import React from 'react'
import styles from './Loader.module.css'

const AnimatedLogo = () => (
    <React.Fragment>
        <polygon points="1,7 7,7 6,11 0,11" />
        <polygon points="1,12 7,12 6,16 0,16" />
    </React.Fragment>
)

function Loader() {
    return (
        <div className={styles['container']}>
            <svg version="1.0" className={styles['loader']} viewBox="0 0 20 20">
                <svg viewBox="0 0 24 24" className={styles['logo']}>
                    <AnimatedLogo />
                </svg>
            </svg>
        </div>
    )
}

export default Loader
