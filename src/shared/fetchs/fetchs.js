import moment from 'moment'
import { WEB_MOBILE, WEB_DESKTOP } from '../constants'

const platform = window.navigator.userAgentData.mobile
    ? WEB_MOBILE
    : WEB_DESKTOP

export const fetchLogin = formData => {
    return fetch('https://virtual-sports-yi3j9.ondigitalocean.app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
}

export const fetchRegistration = formData => {
    return fetch('https://virtual-sports-yi3j9.ondigitalocean.app/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
}

export const fetchLogout = () => {
    return fetch('https://virtual-sports-yi3j9.ondigitalocean.app/logout', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const getDataFromSeverFunction = token => {
    return fetch('https://virtual-sports-yi3j9.ondigitalocean.app/Games', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Platform': `${platform}`,
            ...(token && { Authorization: `Bearer ${token}` }),
        },
    })
}

export const fetchMakeBet = (bet, token) => {
    const formData = {
        dateTime: moment().format('DD-MM-YYYY hh:mm:ss'),
        betType: bet,
    }
    return fetch(
        'https://virtual-sports-yi3j9.ondigitalocean.app/Games/play/dice',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Platform': `${platform}`,
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        }
    )
}

export const fetchGetHistory = token => {
    return fetch(
        'https://virtual-sports-yi3j9.ondigitalocean.app/User/history',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Platform': platform,
                Authorization: `Bearer ${token}`,
            },
        }
    )
}

export const fetchGetFavourite = token => {
    return fetch(
        'https://virtual-sports-yi3j9.ondigitalocean.app/User/favourites',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Platform': platform,
                Authorization: `Bearer ${token}`,
            },
        }
    )
}

export const fetchAddToFavorite = (id, token) => {
    return fetch(
        `https://virtual-sports-yi3j9.ondigitalocean.app/User/favourite/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Platform': platform,
                Authorization: `Bearer ${token}`,
            },
        }
    )
}
export const fetchRemoveFromFavorite = (id, token) => {
    return fetch(
        `https://virtual-sports-yi3j9.ondigitalocean.app/User/favourite/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Platform': platform,
                Authorization: `Bearer ${token}`,
            },
        }
    )
}
