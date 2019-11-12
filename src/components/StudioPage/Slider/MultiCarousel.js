import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import AOS from 'aos'
import { Image, Transformation } from 'cloudinary-react'


import utils from '../../../decorators/utils'

import CursorProvider from '../../Cursor/CursorProvider'

import './style.sass'

const MultiCarousel = ({ listImg, getUniqId }) => {

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
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
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
      <div className='slider-swiper'>
          <Swiper {...params}>
              {
                listImg.map( img => (
                  <div key={getUniqId()}>
                    <CursorProvider text='drag'>
                      <div className='slider-swiper__anima'
                        data-aos="fade-up"
                        data-aos-delay={`${img * 200}`}
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                      >
                        <Image className='slider-swiper__img' publicId={`reactive/studio/${img}.jpg`} >
                            <Transformation flags={["progressive", "progressive:semi"]} />
                        </Image> 
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
  listImg: PropTypes.array,
  //From decorator
  getUniqId: PropTypes.func.isRequired
}


export default utils( MultiCarousel );