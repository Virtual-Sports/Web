import React from 'react'

import styles from '../Sidebar.module.css'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

Categories.propTypes = {
    selectedCategory: PropTypes.string,
    onSelectHandler: PropTypes.func.isRequired,
}

function Categories({ selectedCategory = null, onSelectHandler }) {
    const categories = useSelector(state => state.data.data.categories)

    return categories.map(category => (
        <div
            key={category.id}
            className={`${styles['category']} ${
                category.id === selectedCategory ? styles['selected'] : []
            }`}
            onClick={onSelectHandler(category.id, true, category.displayName)}
        >
            <img src={category.icon} alt="category-icon" />
            <p>{category.displayName}</p>
        </div>
    ))
}

export default Categories
