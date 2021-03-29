import React from 'react'
import { shallow, render } from 'enzyme'
import Loader from './Loader.jsx'

describe('Loader component', () => {
    it('should render without crashing', () => {
        shallow(<Loader />)
    })

    it('should contain two polygons', () => {
        const wrapper = render(<Loader />)

        expect(wrapper.find('polygon').length).toBe(2)
    })
})
