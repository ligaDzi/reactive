import React from 'react'

import ServicesTxt from './ServicesTxt'
import ServicesImg from './ServicesImg'

import './style.sass'
import '../../../style/_position.sass'

const Services = () => (
    <div className='studio-services height20 flex'>
        <div></div>
        <ServicesTxt />
        <ServicesImg />
        <div></div>
    </div>
)

export default Services;