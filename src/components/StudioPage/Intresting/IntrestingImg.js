import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { Image, Transformation } from 'cloudinary-react'


import Scroll from '../Scroll'

import './style.sass'

const IntrestingImg = () => (
    <div className='intresting-img'>
        <CSSTransitionGroup
            transitionName = 'intresting-img__content'  
            transitionAppear
            transitionAppearTimeout = {650}
            transitionEnterTimeout = {100}
            transitionLeaveTimeout = {100}
            component = 'div'            
        >
            <div className='intresting-img__content'>
                <Scroll />
                <Image publicId='reactive/reactive_studio.jpg' >
                    <Transformation flags={["progressive", "progressive:semi"]} />
                </Image> 
            </div>
        </CSSTransitionGroup>
    </div>
)

export default IntrestingImg;