import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadArticlesFromTo, selectArticle, closeArticle, loadAllArticles, leaveCursor } from '../../AC'
import { filtreatedArticleSelector } from '../../selectors'

import ArticlesList from './ArticlesList'
import Loader from '../Loader'

import './style.sass'

class Articles extends Component{

    static propTypes = {
        //from store
        articles: PropTypes.array,
        isArticles: PropTypes.shape({
            isLoading: PropTypes.bool,
            isLoaded: PropTypes.bool,
            isError: PropTypes.bool
        }),
        artFocus: PropTypes.object,
        artNext: PropTypes.object,
        loadArticlesFromTo: PropTypes.func.isRequired,
        selectArticle: PropTypes.func.isRequired,
        closeArticle: PropTypes.func.isRequired,
        leaveCursor: PropTypes.func.isRequired,
    }

    componentDidMount = () => {   
        const { isLoading, isLoaded } = this.props.isArticles;     
        const { loadArticlesFromTo } = this.props;        
               
        if(!isLoaded && !isLoading) { 
            loadArticlesFromTo();
        }
    }


    render() {
        const { articles, artFocus, artNext, selectArticle, closeArticle, leaveCursor, isArticles } = this.props;

        if(isArticles.isLoading) return <div className='articles-section'> <Loader color='white' /> </div>
        if(isArticles.isError) {
            console.error('Slider Error');
            return null;
        }  

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
        isArticles: {
            isLoading: state.articles.all.isLoading,
            isLoaded: state.articles.all.isLoaded,
            isError: state.articles.all.isError,
        },
        artFocus: state.articles.selectArticle.artFocus,
        artNext: state.articles.selectArticle.artNext
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