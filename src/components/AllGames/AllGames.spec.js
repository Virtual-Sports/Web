import React from 'react'
import { shallow } from 'enzyme'

import AllGames from './AllGames'
import { Provider } from 'react-redux'
import store from '../../redux/store'

jest.mock('../../shared/slider/Slider', () => 'Slider')
jest.mock('./GamesContainer/GamesContainer', () => 'GamesContainer')
jest.mock('./GameCardSlider/GameCardSlider', () => 'GameCardSlider')

jest.mock('../../shared/fetchs/fetchs', () => ({
    fetchLogout: jest.fn(),
}))
jest.mock('react-router-dom', () => ({
    useHistory: jest.fn(),
}))

describe('AllGames component', () => {
    it('should render without crashing', () => {
        jest.mock('react-redux', () => ({
            useSelector: () => ({
                allGames: [{ id: 1 }],
                tags: [{ id: 'top' }],
                selectedCategory: null,
                selectedCategoryTitle: null,
                selectedProviders: [],
            }),
        }))

        shallow(
            <Provider store={store}>
                <AllGames />
            </Provider>
        )
    })
})
