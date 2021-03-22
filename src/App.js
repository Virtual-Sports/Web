import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import MainPage from './components/MainPage/MainPage'
import GamePage from './components/GamePage/GamePage'

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/game" component={GamePage} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
