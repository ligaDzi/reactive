import React, { useEffect } from 'react'
import AOS from 'aos'

import './style.sass'
import '../../../style/_position.sass'

export default () => {
    useEffect( () => {
        AOS.init({
            duration: 2000,
            once: true
        })
    });

    return (
        <div className='teamPage-middle flex'>
            <div className='teamPage-middle__boldTxt flex'>
                <div></div>
                <div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="500"
                        data-aos-easing="ease"
                    >
                        <div className='tp-m-bt__txt'>reactive employs cursus metus aliquam eleifend mi in nulla. Sit amet cursus sit amet dictum sit amet.</div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='teamPage-middle__txt flex'>
                <div></div>
                <div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="500"
                        data-aos-easing="ease"
                    >
                        <div className='tp-m-t__txt'>Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Rhoncus aenean vel elit scelerisque mauris pellentesque. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.</div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}