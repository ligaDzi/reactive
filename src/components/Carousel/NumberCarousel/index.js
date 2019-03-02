import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import utilsDecor from '../../../decorators/utils'

import './style.sass'
import '../../../style/_position.sass'

class NumberCarousel extends Component {
    static propTypes = {
        //from component
        numSlides: PropTypes.number,
        nextSlide: PropTypes.number,
        activeSlide: PropTypes.number,
        //from decorator
        getUniqId: PropTypes.func
    }

    getNumSlide = num => {
        return num < 10 ? `0${num}` : num;
    }

    showNumList = length => {
        const { getUniqId } = this.props;
        let list = [];        
        for (let i = 0; i <= length; i++) {
            list.push( <li key = {getUniqId()}> {this.getNumSlide(i)} </li> );          
        }
        
        return (
            <ul className='num-item__list'>
                { list }
            </ul>
        )
    }

    render() {
        const { numSlides, activeSlide, nextSlide, getUniqId } = this.props;

        return (
            <div className='num-item__content flex '>
                <div className='num-item__block'>

                    <CSSTransitionGroup                            
                        transitionName = 'num-item__list'  
                        transitionAppear
                        transitionEnterTimeout = {100}
                        transitionLeaveTimeout = {100}
                        transitionAppearTimeout = {900}  
                        component = 'div' 
                    >
                        <ul className='num-item__list'>
                            <li key = {getUniqId()}> {this.getNumSlide(activeSlide)} </li>
                            <li key = {getUniqId()}> {this.getNumSlide(nextSlide)} </li>
                        </ul>
                    </CSSTransitionGroup>

                </div>
                <div className='num-item__block'>
                    <span>/</span>
                    {this.getNumSlide(numSlides)}
                </div>
            </div>
        )
    }
}

export default utilsDecor( NumberCarousel );