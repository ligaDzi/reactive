import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import './style.sass'
import '../../../style/_position.sass'

const IntrestingHeader = () => (
    <div className='intresting-text__header flex height5'>
        <div></div>
        <div>
            <CSSTransitionGroup
                transitionName = 'intresting-text__content'  
                transitionAppear
                transitionAppearTimeout = {600}
                transitionEnterTimeout = {100}
                transitionLeaveTimeout = {100}
                component = 'div'            
            >
                <div className='intresting-text__content'>
                    <h6>Intersecting</h6>
                    <span className='txt-size__normal'>Inovation / Brand / Retail</span>/span>
                </div>
            </CSSTransitionGroup>
        </div>
        <div></div>
        <div>
            <CSSTransitionGroup
                transitionName = 'intresting-text__content'  
                transitionAppear
                transitionAppearTimeout = {600}
                transitionEnterTimeout = {100}
                transitionLeaveTimeout = {100}
                component = 'div'            
            >
                <div className='intresting-text__content'>
                    <h6>Since</h6>
                    <span className='txt-size__normal'>2019</span>
                </div>
            </CSSTransitionGroup>
        </div>
        <div></div>
    </div>
)

const IntrestingDeac = () => (
    <div className='intresting-text__desc flex height5'>
        <div></div>
        <div>
            <CSSTransitionGroup
                transitionName = 'intresting-text__content'  
                transitionAppear
                transitionAppearTimeout = {650}
                transitionEnterTimeout = {100}
                transitionLeaveTimeout = {100}
                component = 'div'            
            >
                <div className='intresting-text__content'>
                    <span className='i-txt-cont__desc'>
                        In veniam fugit repellendus, perspiciatis voluptate, aut nostrum dicta delectus cum eum reprehenderit consequatur dignissimos facilis ab impedit tenetur itaque. Molestias dignissimos, ullam error delectus perspiciatis inventore magni nam suscipit assumenda tempore saepe consectetur facere facilis iure, illum dolorum. 
                    </span>
                </div>
            </CSSTransitionGroup>
        </div>
        <div></div>
    </div>
)

const IntrestingText = () => (
    <div className='intresting-text'>
        <div className='max-block'>
            <div className='height5'></div>
            <IntrestingHeader />
            <div className='height5'></div>
            <IntrestingDeac />
        </div>
    </div>
)

export default IntrestingText;