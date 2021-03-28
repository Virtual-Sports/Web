import React from 'react'
import { shallow } from 'enzyme'

import AllGames from './AllGames'
import { Provider } from 'react-redux'
import store from '../../redux/store'

describe('AllGames component', () => {
    it('should render without crashing', () => {
        shallow(
            <Provider store={store}>
                <AllGames />
            </Provider>
        )
    })

    // it('should contain sorry image if no games passed', () => {
    //     const wrapper = shallow(<GamesContainer title={'title'} games={[]} />)
    //
    //     expect(wrapper.containsMatchingElement(<PMSorry />)).toEqual(true)
    // })
    //
    // it('should display default image if no img prop given', () => {
    //     const games = [
    //         {
    //             id: 0,
    //         },
    //         {
    //             id: 1,
    //         },
    //         {
    //             id: 2,
    //         },
    //     ]
    //
    //     const tree = renderer
    //         .create(
    //             <BrowserRouter>
    //                 <GamesContainer title={'title'} games={games} />
    //             </BrowserRouter>
    //         )
    //         .toJSON()
    //     expect(tree).toMatchSnapshot()
    // })
})
