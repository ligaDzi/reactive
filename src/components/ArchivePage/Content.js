import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { filtreatedArticleSelector } from '../../selectors'
import { loadAllArticles, sliceArticles } from '../../AC'

import Loader from '../Loader'
import ArticlesList from './ArticlesList'

import './style.sass'

const Content = ({ isArticles, keyArchivePg, loadAllArticles, sliceArticles }) => {

    const archivePgRef = useRef();

    useEffect(() => { 
              
        if(!isArticles.isLoading){
            loadAllArticles();              
        } 
        return () => sliceArticles();
    }, []);

        
    const renderArtList = () => {   
        if(isArticles.isLoaded) {
            return <ArticlesList archivePgRef={archivePgRef} />
        } else return null;
    }

    if(isArticles.isLoading) return <div className='archivePage'> <Loader color='white' /> </div>
    if(isArticles.isError) {
        console.error('Slider Error');
        return null;
    }
    return (
        <div className='archivePg' ref={archivePgRef} key={keyArchivePg}>
            <div className='archivePg__height'></div>
            { renderArtList() }
        </div>
    )
}

Content.propTypes = {
    //from store
    isArticles: PropTypes.shape({
        isLoading: PropTypes.bool,
        isLoaded: PropTypes.bool,
        isError: PropTypes.bool
    }),
    keyArchivePg: PropTypes.number,
    loadAllArticles: PropTypes.func.isRequired,
    sliceArticles: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        isArticles: {
            isLoading: state.articles.all.isLoading,
            isLoaded: state.articles.all.isLoaded,
            isError: state.articles.all.isError,
        },
        keyArchivePg: state.categories.keyArchivePg
    }
}

const mapToDispatch = {
    loadAllArticles,
    sliceArticles
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( Content );