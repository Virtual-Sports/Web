import React from 'react'
import { shallow } from 'enzyme'
import Categories from './Categories.jsx'
import { Provider } from 'react-redux'
import store from '../../../redux/store'

import { Selectors } from '../Sidebar.selector'

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => jest.fn(),
}))

const setup = ({ totalCost }) => {
    jest.spyOn(Selectors, 'totalCost').mockReturnValue(totalCost)
    jest.spyOn(Actions, 'reset')
}

describe('Categories component', () => {
    it('should render without crashing', () => {
        const onSelectHandler = jest.fn()
        shallow(
            <Provider store={store}>
                <Categories onSelectHandler={onSelectHandler} />
            </Provider>
        )
    })

    it('should contain image tag and p tag', () => {
        jest.mock('react-redux', () => ({
            useSelector: () => ({
                categories: [{ id: 1, displayName: 'name' }],
            }),
        }))
        const onSelectHandler = jest.fn()

        const wrapper = shallow(
            <Provider store={store}>
                <Categories onSelectHandler={onSelectHandler} />
            </Provider>
        )

        const img = wrapper.find('img')
        const p = wrapper.find('p')

        expect(img.length).toBe(1)
        expect(p.length).toBe(1)
        expect(p.text()).toEqual('name')
    })

    // it('should display default image if no img prop given', () => {
    //     const wrapper = shallow(<GameCard id={0} />)
    //
    //     expect(wrapper.find('img').prop('src')).toEqual(DEFAULT_IMAGE)
    // })
    //
    // it('should display default title if no title prop given', () => {
    //     const wrapper = shallow(<GameCard id={0} />)
    //
    //     expect(wrapper.find('p').text()).toEqual(NO_TITLE)
    // })
    //
    // it('should call any passed in onError after an image load error', () => {
    //     const wrapper = shallow(<GameCard id={0} img={'123.123'} />)
    //
    //     const handleError = wrapper.find('img').prop('onError')
    //     expect(typeof handleError).toBe('function')
    //     const fakeE = {
    //         target: {
    //             src: '',
    //         },
    //     }
    //
    //     handleError(fakeE)
    //     expect(fakeE.target.src).toBe(DEFAULT_IMAGE)
    // })
})
