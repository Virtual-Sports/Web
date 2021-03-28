import React from 'react'
import { shallow } from 'enzyme'
import GamePage from './GamePage.jsx'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { NO_TITLE } from '../../shared/constants'
import Header from '../Header/Header'

const mockHistoryPush = jest.fn()

jest.mock('../Header/Header', () => () => 'Header')
jest.mock('../../shared/fetchs/fetchs', () => ({
    fetchLogout: jest.fn(),
}))
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: mockHistoryPush,
    }),
    useParams: () => ({
        id: 1,
    }),
}))

jest.mock('react-redux', () => ({
    useSelector: () => ({
        allGames: [{ id: 1 }],
    }),
}))

describe('GamePage component', () => {
    it('should render without crashing', () => {
        shallow(<GamePage />)
    })

    it('should render an iframe if a game exists', () => {
        jest.mock('react-redux', () => ({
            useSelector: () => ({
                allGames: [],
            }),
        }))

        const wrapper = shallow(<GamePage />)
        expect(wrapper.find('iframe').length).toBe(1)
    })

    it('should display default title if no game given', () => {
        jest.mock('react-redux', () => ({
            useSelector: () => ({
                allGames: [],
            }),
        }))

        const wrapper = shallow(<GamePage />)

        expect(wrapper.find(Header).props().title).toEqual(NO_TITLE)
    })

    it('Redirects to correct URL on click', () => {
        jest.mock('react-redux', () => ({
            useSelector: () => ({
                allGames: [],
            }),
        }))

        const { getByRole } = render(
            <BrowserRouter>
                <GamePage />
            </BrowserRouter>
        )

        // fireEvent.click(getByRole('button'))
        expect(mockHistoryPush).toHaveBeenCalledWith('/game/original_dice_game')
    })
})
