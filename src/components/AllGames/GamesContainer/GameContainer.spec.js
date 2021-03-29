import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

import GamesContainer from './GamesContainer.jsx'
import { ReactComponent as PMSorry } from '../../../resources/icons/pm-sorry.svg'

describe('GamesContainer component', () => {
    it('should render without crashing', () => {
        shallow(<GamesContainer title={'title'} games={[]} />)
    })

    it('should contain sorry image if no games passed', () => {
        const wrapper = shallow(<GamesContainer title={'title'} games={[]} />)

        expect(wrapper.containsMatchingElement(<PMSorry />)).toEqual(true)
    })

    it('should display default image if no img prop given', () => {
        const games = [
            {
                id: 0,
            },
            {
                id: 1,
            },
            {
                id: 2,
            },
        ]

        const tree = renderer
            .create(
                <BrowserRouter>
                    <GamesContainer title={'title'} games={games} />
                </BrowserRouter>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
