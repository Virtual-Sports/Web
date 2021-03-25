import React from 'react'
import Carousel from 'react-multi-carousel'
import PropTypes from 'prop-types'
import './slider.css'

export const Slider = ({ children }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 0 },
            items: 2,
        },
    }
    return (
        <Carousel
            removeArrowOnDeviceType={['mobile', 'tablet']}
            swipeable={true}
            responsive={responsive}
        >
            {children}
        </Carousel>
    )
}

Slider.propTypes = {
    children: PropTypes.object,
}
