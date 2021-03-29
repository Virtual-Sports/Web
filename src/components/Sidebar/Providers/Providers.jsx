import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import styles from '../Sidebar.module.css'

import DEFAULT_PROVIDER_PHOTO from '../../../resources/icons/default-provider.svg'

function Providers({ selectedProviders, onSelectHandler }) {
    const providers = useSelector(state => state.data.data.providers)

    return (
        providers &&
        providers.map(provider => (
            <div
                key={provider.id}
                className={`${styles['provider']} ${
                    selectedProviders.includes(provider.id)
                        ? styles['selected']
                        : ''
                }`}
                onClick={onSelectHandler(provider.id, false)}
            >
                <img
                    src={provider.image || DEFAULT_PROVIDER_PHOTO}
                    alt="provider-icon"
                />
            </div>
        ))
    )
}

Providers.propTypes = {
    selectedProviders: PropTypes.array.isRequired,
    onSelectHandler: PropTypes.func.isRequired,
}

export default Providers
