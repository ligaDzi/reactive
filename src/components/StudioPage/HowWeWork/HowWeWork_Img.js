import React, { useEffect } from 'react'
import AOS from 'aos'
import { Image, Transformation } from 'cloudinary-react'


import './style.sass'

const HowWeWorkImg = () => {

    useEffect( () => {
        AOS.init({
            duration : 2000,
            once: true
        })
    });

    return (
        <div className='howWeWork-img'
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1200"
            data-aos-easing="ease"
        >
            <div  className='howWeWork-img_wrap'>
                <Image publicId='reactive/makespace_studio_vertical.jpg' >
                    <Transformation flags={["progressive", "progressive:semi"]} />
                </Image> 
            </div>
        </div>
    )
}

export default HowWeWorkImg;