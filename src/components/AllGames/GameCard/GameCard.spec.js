import React from 'react'
import { shallow } from 'enzyme'
import GameCard from './GameCard.jsx'
import { DEFAULT_IMAGE, NO_TITLE } from '../../../shared/constants'

describe('GameCard component', () => {
    it('should render without crashing', () => {
        shallow(<GameCard id={0} title={'title'} />)
    })

    it('should contain image tag and p tag', () => {
        const wrapper = shallow(<GameCard id={0} title={'title'} />)

        const img = wrapper.find('img')
        const p = wrapper.find('p')

        expect(img.length).toBe(1)
        expect(p.length).toBe(1)
    })

    it('should display default image if no img prop given', () => {
        const wrapper = shallow(<GameCard id={0} />)

        expect(wrapper.find('img').prop('src')).toEqual(DEFAULT_IMAGE)
    })

    it('should display default title if no title prop given', () => {
        const wrapper = shallow(<GameCard id={0} />)

        expect(wrapper.find('p').text()).toEqual(NO_TITLE)
    })

    it('should call any passed in onError after an image load error', () => {
        const wrapper = shallow(<GameCard id={0} img={'123.123'} />)

        const handleError = wrapper.find('img').prop('onError')
        expect(typeof handleError).toBe('function')
        const fakeE = {
            target: {
                src: '',
            },
        }

        handleError(fakeE)
        expect(fakeE.target.src).toBe(DEFAULT_IMAGE)
    })
})
