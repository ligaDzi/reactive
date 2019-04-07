import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flipped } from 'react-flip-toolkit'

import CurrentOpenArt from '../CurrentOpenArticle'
import NextOpenArt from '../NextOpenArticle'

import './style.sass'

class OpenArticle extends Component {

    static propTypes = {
        //from component
        article: PropTypes.object,
        artNext: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.bool
        ]),
        closeArticle: PropTypes.func.isRequired,
    }

    state = {
        isOpen: false
    }

    handleScroll = ev => {
        const { artOpenRef } = this.refs; 
        const { isOpen } = this.state;

        if( !isOpen ){
            setTimeout( () => {
                this.setState({
                    isOpen: true
                });
                artOpenRef.scrollTop = 0;
            }, 50)

        } else if(artOpenRef.scrollTop === 0){
            this.setState({
                isOpen: false
            })            
        }
        
    }

    renderNextArt = () => {
        const { artNext, openArticle } = this.props;

        return (
            artNext ? (
                <div className = 'article-open__next' onClick = { () => { openArticle(artNext.id) }}>  </div>
            ) : null
        )
    }

    render() {
        const { article, artNext, closeArticle, openArticle } = this.props;
        const { isOpen } = this.state;
        
        return (
            <Flipped 
                flipId = {`article-card-${article.id}`} 
                
            >
                <div 
                    className = 'article-open'
                    ref='artOpenRef' 
                    onScroll = {this.handleScroll}                    
                >
                    <CurrentOpenArt 
                        article = {article}
                        artNext = {artNext}
                        isOpen = {isOpen}
                        closeArticle = {closeArticle}
                    />
                    {this.renderNextArt()}
                </div>
            </Flipped>
        )
    }
}

export default OpenArticle;