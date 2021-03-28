import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './MainPage.module.css'

import Sidebar from '../Sidebar/Sidebar'
import HeaderMain from '../Header/HeaderMain'
import AllGames from '../AllGames/AllGames'
import { mainPageSelector } from './MainPage.selector.js'
import LoginModal from '../../shared/modals/LoginModal'
import RegistrationModal from '../../shared/modals/RegistrationModal'
import useToken from '../../shared/hooks/useToken'

function MainPage() {
    const { token, setToken } = useToken()
    const { filtersVisibility, categories, providers } = useSelector(
        mainPageSelector
    )
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
    const [
        isRegistrationModalVisible,
        setIsRegistrationModalVisible,
    ] = useState(false)

    return (
        <div className={styles['container']}>
            <HeaderMain
                token={token}
                setToken={setToken}
                setIsLoginModalVisible={setIsLoginModalVisible}
                setIsRegistrationModalVisible={setIsRegistrationModalVisible}
            />

            <div className={styles['main-content']}>
                <div className={styles['sidebar']}>
                    <Sidebar categories={categories} providers={providers} />
                </div>

                {!filtersVisibility && (
                    <div className={styles['games-container']}>
                        <AllGames />
                    </div>
                )}
                {isLoginModalVisible && (
                    <LoginModal
                        setToken={setToken}
                        setIsLoginModalVisible={setIsLoginModalVisible}
                        setIsRegistrationModalVisible={
                            setIsRegistrationModalVisible
                        }
                    />
                )}
                {isRegistrationModalVisible && (
                    <RegistrationModal
                        setToken={setToken}
                        setIsLoginModalVisible={setIsLoginModalVisible}
                        setIsRegistrationModalVisible={
                            setIsRegistrationModalVisible
                        }
                    />
                )}
            </div>
        </div>
    )
}

export default MainPage
