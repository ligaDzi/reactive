import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'
import Swiper from 'react-id-swiper'

import Worker from '../Managers/Worker'
import CursorProvider from '../../Cursor/CursorProvider'

import './style.sass'
import '../../../style/_position.sass'

const MultiCarousel = ({ workers }) => {

    useEffect( () => {
        AOS.init({
            duration: 2000,
            once: true
        })
    });
    
    const params = {
        slidesPerView: 5,        
        spaceBetween: 50,
        freeMode: true,
        scrollbarCustomizedClass: 'testScroll',
        scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
        draggable: true,
        dragSize: 58
        },        
        breakpoints: {
            1500: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            481: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 15
            }
        }
    }

    return (
        <div className='teamPage-slider-swiper'>
            <Swiper {...params}>
                {
                    workers.map( (worker, i) => (
                        <div key={worker.id}>
                            <CursorProvider text='drag'>
                                <div className='tp-s-s__anima'
                                    data-aos="fade-up"
                                    data-aos-delay={`${i * 200}`}
                                    data-aos-duration="800"
                                    data-aos-easing="ease"
                                >
                                    <Worker worker={worker} />
                                </div>
                            </CursorProvider>
                        </div>
                    ))
                }                
            </Swiper>
        </div>
    )
}

MultiCarousel.propTypes = {
    //From component
    workers: PropTypes.array
}

export default MultiCarousel;