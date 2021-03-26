import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'

import MainPage from './components/MainPage/MainPage'
import GamePage from './components/GamePage/GamePage'

import Dice from './components/DiceGame/Dice'
import { fetchData, setWidth } from './redux/actions/data'
import { DESKTOP_WIDTH, MOBILE_WIDTH, TABLET_WIDTH } from './shared/constants'
import Loader from './components/Loader/Loader'
import useToken from './shared/hooks/useToken'

function App() {
    const dispatch = useDispatch()

    const isLoaded = useSelector(state => state.data.isLoaded)
    const { token } = useToken()

    const updateScreenWidth = () => {
        const currentWidth = window.innerWidth

        if (currentWidth < MOBILE_WIDTH) dispatch(setWidth(MOBILE_WIDTH))
        else if (currentWidth <= TABLET_WIDTH) dispatch(setWidth(TABLET_WIDTH))
        else if (currentWidth > TABLET_WIDTH) dispatch(setWidth(DESKTOP_WIDTH))
    }

    useEffect(() => {
        dispatch(fetchData(token))
        updateScreenWidth()

        window.addEventListener('resize', updateScreenWidth)
        return () => window.removeEventListener('resize', updateScreenWidth)
    }, [])

    return (
        <Router>
            <div className="App">
                {isLoaded ? (
                    <Loader />
                ) : (
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route
                            path="/game/original_dice_game"
                            component={Dice}
                        />
                        <Route path="/game/:id" component={GamePage} />
                    </Switch>
                )}
            </div>
        </Router>
    )
}

export default App
