import { useState } from 'react'

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token')
        return tokenString ? JSON.parse(tokenString) : null
    }

    const [token, setToken] = useState(getToken())

    const saveToken = tokenString => {
        localStorage.setItem('token', JSON.stringify(tokenString))
        setToken(tokenString)
    }

    return {
        setToken: saveToken,
        token,
    }
}
