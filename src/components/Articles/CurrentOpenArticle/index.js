import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

import ArtSliderContent from '../ArtSliderContent'
import ImgList from '../ImgListArtSlider'
import ContentOpenArticle from '../ContentOpenArticle'

import './style.sass'
import '../../../style/_position.sass'

class CurrentOpenArticle extends PureComponent {

    static propTypes = {
        //from component
        article: PropTypes.object,
        artNext: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.bool
        ]),
        isOpen: PropTypes.bool,
        closeArticle: PropTypes.func.isRequired
    }
      
    state = {
        activeImg: 0,
        isActiveArt: true
    }

    deactiveArt = () => {
        this.setState({
            isActiveArt: false
        })
    }

    onClickUp = ev => {
        const imgLength = this.props.article.images.length;
        const { activeImg } = this.state;        

        if( activeImg > 0 ) {
            this.setState({
                activeImg: (activeImg - 1)
            })
        } else {
            this.setState({
                activeImg: (imgLength - 1)
            })
        }
    }

    onClickDown = ev => {
        const imgLength = this.props.article.images.length;
        const { activeImg } = this.state;

        if( (activeImg + 1) < imgLength ) {
            this.setState({
                activeImg: (activeImg + 1)
            })
        } else {
            this.setState({
                activeImg: 0
            })
        }
    }

    onClickLine = index => {        
        this.setState({
            activeImg: index
        })
    }

    render() {
        const { article, artNext, isOpen, closeArticle } = this.props;
        const { activeImg, isActiveArt } = this.state;
        const open = isOpen && isActiveArt ? 'open' : '';
        
        return (
            <div className = 'article-current'>
                <div className = 'article-slider'>
                    <div className = {`article-slider__default ${open}`}>
                        <ImgList imgList = {article.images} activeImg = {activeImg} />
                        <ArtSliderContent 
                            article = {article}                             
                            closeArticle = {closeArticle}                             
                            activeImg = {activeImg}
                            isOpen = {isOpen}
                            isActiveArt = {isActiveArt}
                            deactiveArt = {this.deactiveArt}
                            onClickLine = {this.onClickLine}
                            onClickUp = {this.onClickUp}
                            onClickDown = {this.onClickDown}
                        />
                    </div>
                </div>
                <div className = 'article-current__content'>
                    <ContentOpenArticle 
                        article = {article} 
                        artNext = {artNext}
                        isOpen = {isOpen}
                    />
                </div>
            </div>
        )
    }
}

export default CurrentOpenArticle;