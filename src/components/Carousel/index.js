import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ImgCarousel from './ImgCarousel'
import NumberCarousel from './NumberCarousel'
import TitleCarousel from './TitleCarousel'

import utilsDecor from '../../decorators/utils'

import './style.sass'
import '../../style/_position.sass'

class Carousel extends Component {

    static propTypes = {
        //from component
        articles: PropTypes.array,
        //from decorator
        getUniqId: PropTypes.func
    }

    state = {
        activeSlide: 0,
        nextSlide: 1,
        nextBtnSlide: 2
    }

    constructor(props){
        super(props);

        this.timeInterval = 6000;
    }

    componentDidMount = () => {
        const { articles } = this.props;
        
        this.interval = setInterval(() => {
            let active = (this.state.activeSlide + 1)%articles.length;            
            let next = (this.state.nextSlide + 1)%articles.length; 
            let nextBtn = (this.state.nextBtnSlide + 1)%articles.length; 

            this.setState({
                activeSlide: active,
                nextSlide: next,
                nextBtnSlide: nextBtn
            });

        }, this.timeInterval);
    }  
    
    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    render() {
        const { articles, getUniqId } = this.props;
        const activeSlide = articles[ this.state.activeSlide ];
        const nextSlide = articles[ this.state.nextSlide ];
        const nextBtnSlide = articles[ this.state.nextBtnSlide ];

        return (
            <div className = 'carousel flex'>
                <NumberCarousel 
                    key = {getUniqId()}
                    numSlides = {articles.length}
                    activeSlide = {this.state.activeSlide + 1} 
                    nextSlide = {this.state.nextSlide + 1} 
                />
                <div className='carousel-items carousel-items__size flex fa-end fj-start'>
                    <div className = 'carousel-size'>                    
                        <ImgCarousel 
                            key = {getUniqId()}
                            activeSlide = {activeSlide}
                            nextSlide = {nextSlide} 
                        />
                    </div>
                </div>
                <TitleCarousel 
                    key = {getUniqId()}
                    activeSlide = {nextSlide}                
                    nextSlide = {nextBtnSlide} 
                />
            </div>
        )
    }
}

export default utilsDecor( Carousel );