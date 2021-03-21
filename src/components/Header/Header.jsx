import React from 'react'

import styles from './Header.module.css'

// Header.propTypes = {
//     initialize: PropTypes.func,
// }

function Header() {
    const isAuthorized = false
    // const url = window.location.pathname

    return (
        <div className={styles['container']}>
            {isAuthorized ? (
                <div className={styles['authorized']}>
                    <button className={styles['logout-button']}>Выход</button>
                </div>
            ) : (
                <div className={styles['unauthorized']}>
                    <button className={styles['login-button']}>Вход</button>
                    <button className={styles['registration-button']}>
                        Регистрация
                    </button>
                </div>
            )}
        </div>
    )
}

// const mapStateToProps = state => ({
//     providers: state.providers,
//     categories: state.categories,
//     tags: state.tags,
//     games: state.games,
// })
//
// const mapDispatchToProps = dispatch => ({
//     initialize: data => dispatch(INITIALIZE(data)),
// })

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Header)

export default Header
