import React from 'react'
import { shallow } from 'enzyme'
import GamePage from './GamePage.jsx'

jest.mock('../Header/Header', () => () => 'Header')
jest.mock('react-redux', () => ({
    useSelector: () => ({
        allGames: [],
    }),
}))
jest.mock('react-router-dom', () => ({
    useHistory: jest.fn(),
    useParams: () => ({
        id: 1,
    }),
}))

describe('GamePage component', () => {
    it('should render without crashing', () => {
        shallow(<GamePage />)
    })

    it('should render an iframe if a game exists', () => {
        jest.mock('react-router-dom', () => ({
            useParams: () => ({
                id: 1,
            }),
        }))

        jest.mock('react-redux', () => ({
            useSelector: () => ({
                allGames: [{ id: 1 }],
            }),
        }))

        const wrapper = shallow(<GamePage />)
        expect(wrapper.find('iframe').length).toBe(1)
    })
})
