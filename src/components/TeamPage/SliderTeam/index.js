import React from 'react'
import PropTypes from 'prop-types'

import MultiCarousel from './MultiCarousel'
import ClickAndDrag from '../../StudioPage/Slider/ClickAndDrag'

import './style.sass'
import '../../../style/_position.sass'

const SliderTeam = ({ workers }) => (
    <div className='teamPage-slider'>
        <MultiCarousel workers={workers} />
        <ClickAndDrag />
    </div>
)

SliderTeam.propTypes = {
    //From component
    workers: PropTypes.array
}

export default SliderTeam;