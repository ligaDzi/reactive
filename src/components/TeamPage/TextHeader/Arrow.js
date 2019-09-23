import React, { useEffect } from 'react'
import AOS from 'aos'

import './style.sass'
import '../../../style/_position.sass'

const Arrow = () => {
    useEffect( () => {
        AOS.init({
            duration: 2000,
            once: true
        })
    });

    return (
        <div className='teamPage-header__arrow flex'>
            <div></div>
            <div>
                <div className='tp-h-a__anima'
                    data-aos="fade-down"
                    data-aos-delay="650"
                    data-aos-duration="400"
                    data-aos-easing="ease"
                >
                    <svg viewBox="0 0 37.57 37.93">
                        <g>
                            <line y1='18.97' x2='36.16' y2='18.97'></line>
                            <polyline points='17.9 0.71 36.16 18.97 17.9 37.23'></polyline>
                        </g>
                    </svg>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Arrow;