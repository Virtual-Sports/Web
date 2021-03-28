import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from './App'
import store from './redux/store'

jest.mock('./redux/actions/data', () => ({
    fetchData: jest.fn(),
}))

test('App', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const tokenString = localStorage.getItem('token')
    const linkElement = screen.queryByText(/Вход/i)
    expect(tokenString && linkElement).not.toBeInTheDocument()
    expect(!tokenString && linkElement).toBeInTheDocument()
})
