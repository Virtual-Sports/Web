import React from 'react'
import Carousel from 'react-multi-carousel'
import PropTypes from 'prop-types'
import './slider.css'

export const Slider = ({
    children,
    topTag = { id: 'default', displayName: 'default' },
}) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 761 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 760, min: 500 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 499, min: 0 },
            items: 2,
        },
    }

    return (
        <>
            {children.length && (
                <div className="carouselWrapper">
                    <h2 className="carouselTitle">
                        {topTag.displayName}{' '}
                        <span className={'count'}>[{children.length}]</span>
                    </h2>

                    <Carousel
                        draggable={false}
                        removeArrowOnDeviceType={['mobile', 'tablet']}
                        swipeable={true}
                        responsive={responsive}
                    >
                        {children}
                    </Carousel>
                </div>
            )}
        </>
    )
}

Slider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    topTag: PropTypes.object,
}
