import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import CursorProvider from '../Cursor/CursorProvider'

import './style.sass'
import '../../style/_position.sass'

const LinkArticle = () => {

    useEffect( () => {
        AOS.init({
            duration: 2000,
            once: true
        })
    });

    return (
        <div className='readOurArt-link'>
            <div className='readOurArt-link__anima'
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
            >
                <CursorProvider text='read'>
                    <Link to='/' className='flex'>
                        <div className='readOurArt-link__img'>
                            <svg viewBox='0 0 37.57 37.93'>
                                <g>
                                    <line y1='18.97' x2='36.16' y2='18.97'></line>
                                    <polyline points='17.9 0.71 36.16 18.97 17.9 37.23'></polyline>
                                </g>
                            </svg>
                        </div>
                        <div className='readOurArt-link__txt'>Read our articles</div>
                    </Link>
                </CursorProvider>
            </div>
        </div>
    )
}

export default LinkArticle;