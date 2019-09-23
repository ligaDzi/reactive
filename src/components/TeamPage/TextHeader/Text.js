import React, { useEffect } from 'react'
import AOS from 'aos'

import './style.sass'
import '../../../style/_position.sass'

const Text = () => {
    useEffect( () => {
        AOS.init({
            duration: 2000,
            once: true
        })
    });

    return (
        <div className='teamPage-header-txt flex'>
            <div className='teamPage-header-txt__text flex'>
                <div></div>
                <div>
                    <div className='tp-h-t-t__anima'
                        data-aos="fade-up"
                        data-aos-delay="550"
                        data-aos-duration="400"
                        data-aos-easing="ease"
                    >
                        <p>The partners at reactive uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>                        
                    </div>
                </div>
                <div></div>
            </div>
            <div className='teamPage-header-txt__title flex'>
                <div>
                    <div className='tp-h-t-title__anima'
                        data-aos="fade-up"
                        data-aos-delay="700"
                        data-aos-duration="400"
                        data-aos-easing="ease"
                    >
                        <h1>A multidisciplinary creative studio.</h1>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Text;