import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import utilsDecor from '../../../decorators/utils'

import NumberCarousel from '../NumberCarousel'

import './style.sass' 
import '../../../style/_position.sass'

class TitleCarousel extends Component {

    static propTypes = {
        //from component
        activeSlide: PropTypes.object,
        lengthSlide: PropTypes.number,
        numberActive: PropTypes.number,
        numberNext: PropTypes.number,
        //from decorator
        textToParagArr: PropTypes.func.isRequired,
        getUniqId: PropTypes.func.isRequired
    }

    componentWillUpdate = () => {
        console.log('===', 'componentWillUpdate');        
    }

    render() {
        const { 
            activeSlide, 
            textToParagArr, 
            getUniqId, 
            lengthSlide,
            numberActive,
            numberNext } = this.props;

        return (
            <div className = 'carousel-title fa-start fj-start'>
                <div className='carousel-title__block block-desc block-desc__size'>
                    {textToParagArr(activeSlide.description, 25)}
                </div>
                <div className='carousel-title__block flex fa-center fj-sb'>
                    <div className='carousel-slider carousel-slider__size'></div>
                    <div className='carousel-slider__null'></div>
                    <div className='carousel-title__num'>
                        <NumberCarousel 
                            key = {getUniqId()}
                            numSlides = {lengthSlide}
                            activeSlide = {numberActive} 
                            nextSlide = {numberNext} 
                        />
                    </div>
                </div>
                <div className='carousel-title__block block-title block-title__size'>
                    {textToParagArr(activeSlide.title, 14)}
                </div>
            </div>
        )
    }
}

export default utilsDecor( TitleCarousel );