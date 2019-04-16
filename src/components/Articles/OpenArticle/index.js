import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Flipped } from 'react-flip-toolkit'

import CurrentOpenArt from '../CurrentOpenArticle'
import NextOpenArt from '../NextOpenArticle'
import CursorProvider from '../../Cursor/CursorProvider'

import './style.sass'

class OpenArticle extends PureComponent {

    static propTypes = {
        //from component
        article: PropTypes.object,
        artNext: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.bool
        ]),
        closeArticle: PropTypes.func.isRequired,
        leaveCursor: PropTypes.func.isRequired,
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

    handleNextArt = id => ev => {
        const { openArticle, leaveCursor } = this.props;

        leaveCursor();
        openArticle(id);
    }

    renderNextArt = () => {
        const { artNext } = this.props;

        return (
            artNext ? (
                <CursorProvider text = 'next'>
                    <div className = 'article-open__next' onClick = { this.handleNextArt(artNext.id) }>  </div>
                </CursorProvider>
            ) : null
        )
    }

    render() {
        const { article, artNext, closeArticle, leaveCursor } = this.props;
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
                        leaveCursor = {leaveCursor}
                    />
                    {this.renderNextArt()}
                </div>
            </Flipped>
        )
    }
}

export default OpenArticle;