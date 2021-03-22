import React, { useState } from 'react'
import styles from './App.module.css'
import LoginModal from './components/modals/LoginModal'
import RegistrationModal from './components/modals/RegistrationModal'
import useToken from './components/hooks/useToken'

function App() {
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
    const [
        isRegistrationModalVisible,
        setIsRegistrationModalVisible,
    ] = useState(false)
    const { token, setToken } = useToken()

    return (
        <>
            <div className={styles.App}>
                {token ? <div>Залогинений</div> : <div>не залогинений</div>}

                {!token && (
                    <button onClick={() => setIsLoginModalVisible(true)}>
                        Вход
                    </button>
                )}
                {!token && (
                    <button onClick={() => setIsRegistrationModalVisible(true)}>
                        Регистрация
                    </button>
                )}
                {token && <button onClick={() => setToken(null)}>Выход</button>}
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
                        setIsRegistrationModalVisible={
                            setIsRegistrationModalVisible
                        }
                    />
                )}
            </div>
        </>
    )
}

export default App
