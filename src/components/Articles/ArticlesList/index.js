import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flipper } from 'react-flip-toolkit'

import utils from '../../../decorators/utils'

import ArticleCard from '../ArticleCard'
import OpenArticle from '../OpenArticle'
import NextOpenArticle from '../NextOpenArticle'

import './style.sass'

class ArticleList extends Component {

    static propTypes = {
        //from component
        articles: PropTypes.array,
        artFocus: PropTypes.object,
        artNext: PropTypes.object,
        selectArticle: PropTypes.func.isRequired,
        closeArticle: PropTypes.func.isRequired,
        leaveCursor: PropTypes.func.isRequired,
    }

    shouldComponentUpdate = (nextProps, nextState) => {

        const { articles, artFocus } = this.props;

        if( articles.length === 0 ) return true;
        if( artFocus.id !== nextProps.artFocus.id ) return true;
        if( articles.length !== nextProps.articles.length ) return true;

        articles.forEach( (item, i) => {
            if( item.id !== nextProps.articles[i].id ) return true;
        })        
        
        return false;
    }

    showArticleList = articles => {
        const { getUniqId, artFocus, selectArticle, closeArticle, leaveCursor } = this.props; 
        let artNext = this.props.artNext.id ? this.props.artNext : false ;         
     
      
        return articles.map( article => {

            return ( 
                artFocus.id === article.id ? (                    
                    <OpenArticle 
                        key = {getUniqId()} 
                        article = {article} 
                        closeArticle = {closeArticle}
                        artNext = {artNext}
                        openArticle = {selectArticle}
                        leaveCursor = {leaveCursor}
                    />
                ) : artNext.id === article.id ? (
                    <NextOpenArticle 
                        key = {getUniqId()}
                        article = {article}
                    />
                ) : (
                    <ArticleCard 
                        key = {getUniqId()} 
                        article = {article} 
                        openArticle = {selectArticle}
                        leaveCursor = {leaveCursor}
                    />
                )
            )
        })
    }

    render() {
        const { articles, artFocus } = this.props;
        
        
        return (
            <Flipper 
                flipKey = {artFocus.id}
            >
                <div className='articles-list'>
                    {this.showArticleList(articles)}
                </div>
            </Flipper>
        )
    }
}

export default utils( ArticleList );