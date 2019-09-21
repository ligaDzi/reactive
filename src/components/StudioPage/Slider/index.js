import React from 'react'

import MultiCarousel from './MultiCarousel'

import './style.sass'
import '../../../style/_position.sass'

const Slider = () => (
    <div className='studio-slider'>
        <MultiCarousel listImg={[...Array(12).keys()]} />
        <span className='studio-slider__txt'>Click & Drag</span>
    </div>
)

export default Slider;