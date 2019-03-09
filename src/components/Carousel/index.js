import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadArticleCarousel } from '../../AC'

import ImgCarousel from './ImgCarousel'
import NumberCarousel from './NumberCarousel'
import TitleCarousel from './TitleCarousel'
import Categories from './Categories'

import utilsDecor from '../../decorators/utils'

import './style.sass'
import '../../style/_position.sass'

class Carousel extends Component {

    static propTypes = {
        //from store
        articlesCrsl: PropTypes.array,
        loadArticleCarousel: PropTypes.func.isRequired,
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
        this.interval = null;
    }

    componentDidMount = () => {   
        this.props.loadArticleCarousel();

        this.interval = setInterval(() => {
            this.nextSlide();
            
        }, this.timeInterval);
    }  
    
    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    nextSlide = () => {
        const { articlesCrsl } =this.props;

        let active = (this.state.activeSlide + 1)%articlesCrsl.length;            
        let next = (this.state.nextSlide + 1)%articlesCrsl.length; 
        let nextBtn = (this.state.nextBtnSlide + 1)%articlesCrsl.length; 

        this.setState({
            activeSlide: active,
            nextSlide: next,
            nextBtnSlide: nextBtn
        });
    }

    handleNext = ev => {                
        clearInterval(this.interval);        
        this.nextSlide();

        this.interval = setInterval(() => {
            this.nextSlide();
            
        }, this.timeInterval);
    }

    getNumSlider = () => {
        const { articlesCrsl, getUniqId } = this.props;
        const categories = articlesCrsl[this.state.activeSlide].categories;
        
        return (                    
            <div className = 'carousel-num fa-start fj-start'>
                <div className='carousel-num-item'></div>
                <div className='carousel-num-item flex fa-center'>
                    <NumberCarousel 
                        key = {getUniqId()}
                        numSlides = {articlesCrsl.length}
                        activeSlide = {this.state.activeSlide + 1} 
                        nextSlide = {this.state.nextSlide + 1} 
                    />
                </div>
                <div className='carousel-num-item'>
                    <Categories categories = {categories}/>
                </div>
            </div>            
        )
    }

    getImgSlider = () => {
        const { articlesCrsl, getUniqId } = this.props;
        const activeSlide = articlesCrsl[ this.state.activeSlide ];
        const nextSlide = articlesCrsl[ this.state.nextSlide ];

        return (
            <div className='carousel-items carousel-items__size flex fa-end fj-start'>
                <div className = 'carousel-size'>                    
                    <ImgCarousel 
                        key = {getUniqId()}
                        activeSlide = {activeSlide}
                        nextSlide = {nextSlide} 
                    />
                </div>
            </div>            
        )
    }

    getTitleSlider = () => {
        const { articlesCrsl, getUniqId } = this.props;
        const nextSlide = articlesCrsl[ this.state.nextSlide ];
        
        return (
            <TitleCarousel 
                key = {getUniqId()}
                activeSlide = {nextSlide}  
                lengthSlide = {articlesCrsl.length}
                numberActive = {this.state.activeSlide + 1} 
                numberNext = {this.state.nextSlide + 1} 
            />
        )
    }    

    render() {
        const { articlesCrsl, getUniqId } = this.props;
        const nextSlide = articlesCrsl[ this.state.nextSlide ];
        const nextBtnSlide = articlesCrsl[ this.state.nextBtnSlide ];

        return (
            <div className = 'carousel flex'>
                <div className='carousel-changing'>
                    {this.getNumSlider()}
                    {this.getImgSlider()}
                    {this.getTitleSlider()}
                </div>

                <button className='carousel-btn__content' onClick = {this.handleNext}>                    
                    <div className='carousel-btn carousel-btn__size'>
                        <ImgCarousel 
                            key = {getUniqId()}
                            activeSlide = {nextSlide}
                            nextSlide = {nextBtnSlide} 
                        />
                    </div>
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        articlesCrsl: state.articleCarousel
    }
}

const mapToDispatch = {
    loadArticleCarousel
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( utilsDecor( Carousel ) );