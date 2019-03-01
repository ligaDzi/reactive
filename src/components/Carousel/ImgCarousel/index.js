import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import './style.sass'
import '../../../style/_position.sass'

class CarouselImg extends Component{

    static propTypes = {
        //from component
        activeSlide: PropTypes.object,
        nextSlide: PropTypes.object
    }
    
    render() {        
        const { activeSlide, nextSlide } = this.props;        

        return (

            <CSSTransitionGroup
                transitionName = 'carousel-content'  
                transitionAppear
                transitionEnterTimeout = {100}
                transitionLeaveTimeout = {100}
                transitionAppearTimeout = {500}        
            >      
                <div className='carousel-content flex'>
                    <div className='carousel-item carousel-item__size flex-center'> 
                        <img className='carousel-item__img' src={`./src/img/${activeSlide.images[0]}`}/> 
                    </div>
                    <div className='carousel-item carousel-item__size flex-center'>
                        <img className='carousel-item__img' src={`./src/img/${nextSlide.images[0]}`}/>
                    </div>
                </div>          
            </CSSTransitionGroup>
        )
    }
}

export default CarouselImg;