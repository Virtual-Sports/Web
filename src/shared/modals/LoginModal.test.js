import React from 'react'
import { render, screen } from '@testing-library/react'
import LoginModal from './LoginModal'

jest.mock('../../shared/fetchs/fetchs', () => ({
    fetchLogin: jest.fn(),
}))

test('LoginModal', () => {
    render(<LoginModal />)
    const linkElement = screen.queryAllByText(/Вход/i)
    expect(linkElement.length).toEqual(2)
})
