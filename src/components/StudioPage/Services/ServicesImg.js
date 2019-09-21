import React, { useEffect } from 'react'
import AOS from 'aos'

import './style.sass'
import '../../../style/_position.sass'

const ServicesImg = () => {
    useEffect( () => {
        AOS.init({
            duration: 2000,
            once: true
        })
    });

    return (
        <div className='studio-services__img'>
            <div className='s-services-img__anima'
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1200"
                data-aos-easing="ease"
            >
                <div className='s-s-img__wrap'>
                    <img src='../src/img/factory-website-animation.gif' />
                </div>
            </div>
        </div>
    )
}

export default ServicesImg;