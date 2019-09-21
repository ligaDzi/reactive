import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

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
                <img src='../src/img/reactive_studio.jpg' />
            </div>
        </CSSTransitionGroup>
    </div>
)

export default IntrestingImg;