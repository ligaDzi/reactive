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
        closeArticle: PropTypes.func.isRequired
    }

    showArticleList = articles => {
        const { getUniqId, artFocus, artNext, selectArticle, closeArticle } = this.props;   
           
      
        return articles.map( article => {

            return ( 
                artFocus.id === article.id ? (
                    <OpenArticle 
                        key = {getUniqId()} 
                        article = {article} 
                        closeArticle = {closeArticle}
                        artNext = {artNext}
                        openArticle = {selectArticle}
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