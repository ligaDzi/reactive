import React from 'react'

import MultiCarousel from './MultiCarousel'
import ClickAndDrag from './ClickAndDrag'

import './style.sass'
import '../../../style/_position.sass'

const Slider = () => (
    <div className='studio-slider'>
        <MultiCarousel listImg={[...Array(12).keys()]} />
        <ClickAndDrag />
    </div>
)

export default Slider;