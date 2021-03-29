import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

jest.mock('../../shared/fetchs/fetchs', () => ({
    fetchLogout: jest.fn(),
}))
jest.mock('react-router-dom', () => ({
    useHistory: jest.fn(),
}))

describe('Header component', () => {
    it('should render without crashing', () => {
        shallow(<Header isMainPage={true} />)
        shallow(<Header isMainPage={false} />)
    })

    it('should set token to null when clicked on logout button', () => {
        const setToken = jest.fn()
        const wrapper = shallow(
            <Header isMainPage={true} token={'123'} setToken={setToken} />
        )

        wrapper
            .find('button.logout-button')
            .at(0)
            .simulate('click')
        expect(localStorage.getItem('token')).toBe(null)
    })

    it('should call login when clicked on login button', () => {
        const setIsLoginModalVisible = jest.fn()
        const wrapper = shallow(
            <Header
                isMainPage={true}
                setIsLoginModalVisible={setIsLoginModalVisible}
            />
        )

        wrapper
            .find('button.login-button')
            .at(0)
            .simulate('click')
        expect(setIsLoginModalVisible).toBeCalled()
    })

    it('should call register when clicked on register button', () => {
        const setIsRegistrationModalVisible = jest.fn()
        const wrapper = shallow(
            <Header
                isMainPage={true}
                setIsRegistrationModalVisible={setIsRegistrationModalVisible}
            />
        )

        wrapper
            .find('button.registration-button')
            .at(0)
            .simulate('click')
        expect(setIsRegistrationModalVisible).toBeCalled()
    })
})
