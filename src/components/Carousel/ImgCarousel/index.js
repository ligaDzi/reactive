import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import { Flipped } from 'react-flip-toolkit'
import { Image, Transformation } from 'cloudinary-react'



import './style.sass'
import '../../../style/_position.sass'

class CarouselImg extends PureComponent{

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
        const { activeSlide, nextSlide } = this.props;
        
        return (

            <CSSTransitionGroup
                transitionName = 'carousel-content'  
                transitionAppear
                transitionEnterTimeout = {100}
                transitionLeaveTimeout = {100}
                transitionAppearTimeout = {500}        
            > 
                <Flipped flipId = {`article-card-${nextSlide.id}`}>
                    <a className='carousel-content flex' onClick = { this.handleClick } >
                        <div className='carousel-item carousel-item__size flex-center'> 
                            <Image className='carousel-item__img' publicId={`reactive/${activeSlide.images[0]}`} >
                                <Transformation flags={["progressive", "progressive:semi"]} />
                            </Image> 
                        </div>
                        <div className='carousel-item carousel-item__size flex-center'>
                            <Image className='carousel-item__img' publicId={`reactive/${nextSlide.images[0]}`} >
                                <Transformation flags={["progressive", "progressive:semi"]} />
                            </Image> 
                        </div>
                    </a>          
                </Flipped>     
            </CSSTransitionGroup>
        )
    }
}

export default CarouselImg;