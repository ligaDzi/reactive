import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'

import './style.sass'
import '../../style/_position.sass'


const Text = ({ text }) => {

    useEffect( () => {
        AOS.init({
            duration: 2000,
            once: true
        })
    });

    return (
        <div className='readOurArt-txt'>
            <div className='max-block'>
                <div className='readOurArt-txt__null flex'></div>
                <div className='readOurArt-txt__content flex'>
                    <div className='readOurArt-txt__anima'
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                    >
                        <div className='readOurArt-txt__text'>
                            {text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Text.propTypes = {
    //From component
    text: PropTypes.string
}

export default Text;