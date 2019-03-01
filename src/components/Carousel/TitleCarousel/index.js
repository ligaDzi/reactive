import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import utilsDecor from '../../../decorators/utils'

import ImgCarousel from '../ImgCarousel'

import './style.sass' 
import '../../../style/_position.sass'

class TitleCarousel extends Component {

    static propTypes = {
        //from component
        nextSlide: PropTypes.object,
        activeSlide: PropTypes.object,
        //from decorator
        textToParagArr: PropTypes.func.isRequired,
        getUniqId: PropTypes.func.isRequired
    }

    componentWillUpdate = () => {
        console.log('===', 'componentWillUpdate');        
    }

    render() {
        const { nextSlide, activeSlide, textToParagArr, getUniqId } = this.props;

        return (
            <div className = 'carousel-title fa-start fj-start'>
                <div className='carousel-title__block block-desc block-desc__size'>
                    {textToParagArr(activeSlide.description, 25)}
                </div>
                <div className='carousel-title__block flex fa-center'>
                    <div className='carousel-slider carousel-slider__size'></div>
                    <div className='carousel-null'></div>
                    <div className='carousel-btn carousel-btn__size'>
                        <ImgCarousel 
                            key = {getUniqId()}
                            activeSlide = {activeSlide}
                            nextSlide = {nextSlide} 
                        />
                    </div>
                </div>
                <div className='carousel-title__block block-title block-title__size'>
                    {textToParagArr(activeSlide.title, 15)}
                </div>
            </div>
        )
    }
}

export default utilsDecor( TitleCarousel );