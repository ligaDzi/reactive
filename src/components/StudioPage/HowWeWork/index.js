import React from 'react'

import HowWeWorkImg from './HowWeWork_Img'
import HowWeWorkTxt from './HowWeWork_Txt'

import './style.sass'
import '../../../style/_position.sass'

const HowWeWork = () => (
    <div className='howWeWork-content height33 flex'>
        <HowWeWorkImg />
        <div></div>
        <HowWeWorkTxt />
        <div></div>
    </div>
)

export default HowWeWork;