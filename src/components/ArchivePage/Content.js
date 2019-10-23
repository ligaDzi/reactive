import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { filtreatedArticleSelector } from '../../selectors'
import { loadAllArticles, sliceArticles } from '../../AC'

import Loader from '../Loader'
import ArticlesList from './ArticlesList'

import './style.sass'

const Content = ({ articles, isArticles, loadAllArticles, sliceArticles }) => {

    const archivePgRef = useRef();

    useEffect(() => {        
        if(!isArticles.isLoading){
            loadAllArticles();              
        } 
        return () => sliceArticles();
    }, []);
        
    const renderArtList = () => {   
        if(isArticles.isLoaded) {
            return <ArticlesList articles={ articles } archivePgRef={archivePgRef} />
        } else return null;
    }

    if(isArticles.isLoading) return <div className='archivePage'> <Loader color='white' /> </div>
    if(isArticles.isError) {
        console.error('Slider Error');
        return null;
    }
    return (
        <div className='archivePg' ref={archivePgRef}>
            <div className='archivePg__height'></div>
            { renderArtList() }
        </div>
    )
}

Content.propTypes = {
    //from store
    articles: PropTypes.array,
    isArticles: PropTypes.shape({
        isLoading: PropTypes.bool,
        isLoaded: PropTypes.bool,
        isError: PropTypes.bool
    }),
    loadAllArticles: PropTypes.func.isRequired,
    sliceArticles: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        articles: filtreatedArticleSelector(state),
        isArticles: {
            isLoading: state.articles.all.isLoading,
            isLoaded: state.articles.all.isLoaded,
            isError: state.articles.all.isError,
        }
    }
}

const mapToDispatch = {
    loadAllArticles,
    sliceArticles
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( Content );