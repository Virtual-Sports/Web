import React from 'react'

import styles from './Sidebar.module.css'
import { CONFIG } from '../../config'

function Sidebar() {
    const categories = CONFIG.categories
    const providers = CONFIG.providers

    const renderAllCategories = () => {
        return categories.map(category => (
            <div key={category.id} className={styles['category']}>
                <img src={category.icon} alt="category-icon" />
                <p>{category.displayName}</p>
            </div>
        ))
    }

    const renderAllProviders = () => {
        return providers.map(provider => (
            <div key={provider.id} className={styles['provider']}>
                <img src={provider.icon} alt="provider-icon" />
            </div>
        ))
    }

    return (
        <div className={styles['container']}>
            <div className={styles['categories']}>{renderAllCategories()}</div>

            <hr />

            <div className={styles['providers']}>
                <h2>Провайдеры</h2>
                {renderAllProviders()}
            </div>
        </div>
    )
}

export default Sidebar
