import React, { useEffect } from 'react'
import AOS from 'aos'

import './style.sass'
import '../../../style/_position.sass'

const Scroll = () => {

    useEffect( () => {
        AOS.init({
            duration: 2000,
            once: true
        })
    });

    return (        
        <div className='teamPage-header__scroll flex'>
            <div></div>
            <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="400"
                data-aos-easing="ease"
            >
                <div className='tp-h-s__txt'>
                    <span>Scroll</span>
                </div>
            </div>
            <div></div>
        </div>        
    )
}

export default Scroll;