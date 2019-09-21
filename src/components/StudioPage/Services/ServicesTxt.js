import React, { useEffect } from 'react'
import AOS from 'aos'

import './style.sass'
import '../../../style/_position.sass'

const ServicesTxt = () => {
    useEffect( () => {
        AOS.init({
            duration: 2000,
            once: true
        })
    });

    return (
        <div className='studio-services__txt'>
            <div className='max-block'>
                <div className='s-services-txt__wrapp flex'>
                    <div className='s-services-txt__header'>
                        <div className='s-s-txt-h__anima'
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1200"
                            data-aos-easing="ease"
                        >
                            <h6>Services</h6>
                        </div>
                    </div>
                </div>
                <div className='height10 flex'>
                    <div className='s-services-txt__content'>
                        <div className='s-s-txt-c__anima'
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1200"
                            data-aos-easing="ease"
                        >
                            <p>
                                Donec dapibus / Aliquam lectus justo / Fusce  & Phasellus / Donec blandit / Suspendisse / Nullam posuere / Curabitur / Praesent
                            </p>
                        </div>
                    </div>
                    <div className='s-services-txt__null'></div>
                </div>
            </div>
        </div>
    )
}

export default ServicesTxt;