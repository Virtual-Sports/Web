import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('App', () => {
    render(<App />)
    const tokenString = localStorage.getItem('token')
    const linkElement = screen.queryByText(/Вход/i)
    expect(tokenString && linkElement).not.toBeInTheDocument()
    expect(!tokenString && linkElement).toBeInTheDocument()
})
