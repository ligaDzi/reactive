import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import { Flipped } from 'react-flip-toolkit'

import CursorProvider from '../../Cursor/CursorProvider'

import './style.sass'
import '../../../style/_position.sass'

class CarouselImg extends Component{

    static propTypes = {
        //from component
        activeSlide: PropTypes.object,
        nextSlide: PropTypes.object,
        openArticle: PropTypes.func,
        leaveCursor: PropTypes.func,
    }

    handleClick = ev => {
        const { nextSlide, openArticle, leaveCursor } = this.props;

        if(openArticle) {
            leaveCursor();
            openArticle(nextSlide.id);
        }
    }
    
    render() {        
        const { activeSlide, nextSlide, openArticle } = this.props;        

        return (

            <CSSTransitionGroup
                transitionName = 'carousel-content'  
                transitionAppear
                transitionEnterTimeout = {100}
                transitionLeaveTimeout = {100}
                transitionAppearTimeout = {500}        
            > 
                <Flipped flipId = {`article-card-${nextSlide.id}`}>
                    <div className='carousel-content flex' onClick = { this.handleClick } >
                        <div className='carousel-item carousel-item__size flex-center'> 
                            <img className='carousel-item__img' src={`./src/img/${activeSlide.images[0]}`}/> 
                        </div>
                        <div className='carousel-item carousel-item__size flex-center'>
                            <img className='carousel-item__img' src={`./src/img/${nextSlide.images[0]}`}/>
                        </div>
                    </div>          
                </Flipped>     
            </CSSTransitionGroup>
        )
    }
}

export default CarouselImg;