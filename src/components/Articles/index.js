import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadArticlesFromTo, selectArticle, closeArticle, loadAllArticles, leaveCursor } from '../../AC'
import { filtreatedArticleSelector } from '../../selectors'

import ArticlesList from './ArticlesList'

import './style.sass'

class Articles extends Component{

    static propTypes = {
        //from store
        articles: PropTypes.array,
        artFocus: PropTypes.object,
        artNext: PropTypes.object,
        loadArticlesFromTo: PropTypes.func.isRequired,
        selectArticle: PropTypes.func.isRequired,
        closeArticle: PropTypes.func.isRequired,
        leaveCursor: PropTypes.func.isRequired,
    }

    componentDidMount = () => {        
        this.props.loadArticlesFromTo( 5, 10 );
    }

    render() {
        const { articles, artFocus, artNext, selectArticle, closeArticle, leaveCursor } = this.props;

        return (
            <div className='articles-section'>
                <ArticlesList 
                    articles = {articles} 
                    artFocus = {artFocus}
                    artNext = {artNext}
                    selectArticle = {selectArticle}
                    closeArticle = {closeArticle}
                    leaveCursor = {leaveCursor}
                />
            </div>
        )
    }
}

function mapStateToDispatch(state) {
    return {
        articles: filtreatedArticleSelector(state),
        artFocus: state.articles.artFocus,
        artNext: state.articles.artNext
    }
}

const mapToDispatch = {
    loadArticlesFromTo,
    selectArticle,
    closeArticle,
    loadAllArticles,
    leaveCursor
}

const decorator = connect( mapStateToDispatch, mapToDispatch );

export default decorator( Articles );