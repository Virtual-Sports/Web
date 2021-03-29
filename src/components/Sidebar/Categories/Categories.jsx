import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import styles from '../Sidebar.module.css'

import DEFAULT_CATEGORY_PHOTO from '../../../resources/icons/default-category.svg'

function Categories({ selectedCategory = null, onSelectHandler }) {
    const categories = useSelector(state => state.data.data.categories)

    return (
        <>
            {categories &&
                categories.map(category => (
                    <div
                        key={category.id}
                        className={`${styles['category']} ${
                            category.id === selectedCategory
                                ? styles['selected']
                                : []
                        }`}
                        onClick={onSelectHandler(
                            category.id,
                            true,
                            category.displayName
                        )}
                    >
                        <img
                            src={category.image || DEFAULT_CATEGORY_PHOTO}
                            alt="category-icon"
                        />
                        <p>{category.displayName}</p>
                    </div>
                ))}
        </>
    )
}

Categories.propTypes = {
    selectedCategory: PropTypes.string,
    onSelectHandler: PropTypes.func.isRequired,
}

export default Categories
