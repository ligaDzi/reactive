import React, { useEffect } from 'react'
import AOS from 'aos'

import './style.sass'
import '../../../style/_position.sass'

const HowWeWorkTxt = () => {

    useEffect( () => {
        AOS.init({
            duration: 2000,
            once: true
        })
    });

    return (
        <div className='howWeWork-txt'>
            <div className='max-block'>
                <div className='howWeWork-txt__null flex height5'></div>
                <div className='howWeWork-txt__content flex'>
                    <div className='description-root'>
                        <div className='description-root__header'
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1200"
                            data-aos-easing="ease"
                        >
                            <p>How we think and work.</p>
                        </div>
                        <div className='description-root__txt'
                            data-aos="fade-up"
                            data-aos-delay="700"
                            data-aos-duration="1200"
                            data-aos-easing="ease"
                        >
                            <h3>
                                Apiente quas laborum accusamus, iure itaque voluptatum voluptas, cum illum officia eaque vero quod est maiores modi. Veniam deserunt error officiis, minima quidem tenetur veritatis. Voluptatum reprehenderit neque culpa, assumenda aliquid distinctio quibusdam obcaecati, nihil, ullam quas provident.
                            </h3>
                        </div>
                    </div>
                </div>0
            </div>
        </div>
    )
}

export default HowWeWorkTxt;