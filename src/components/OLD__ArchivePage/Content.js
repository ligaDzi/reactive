import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { filtreatedArticleSelector } from '../../selectors'
import { loadAllArticles, sliceArticles } from '../../AC'

import Loader from '../Loader'
import ArticlesList from './ArticlesList'

import './style.sass'

class Content extends Component {

    static propTypes = {
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

    constructor(props) {
        super(props);

        this.archivePgRef = null;
        this.setArchivePgRef = elm => this.archivePgRef = elm;
    }

    componentWillMount = () => {
        const { isArticles, loadAllArticles } = this.props; 

        if(!isArticles.isLoading){
            loadAllArticles();              
        } 
    }

    componentWillUnmount = () => {
        this.props.sliceArticles();
    }
        
    renderArtList = () => {
        const { isArticles, articles } = this.props;        

        if(isArticles.isLoaded) {
            return <ArticlesList articles={ articles } archivePgRef={this.archivePgRef} />
        } else return null;
    }

    render() {
        const { isArticles } = this.props; 
        if(isArticles.isLoading) return <div className='archivePage'> <Loader color='white' /> </div>
        if(isArticles.isError) {
            console.error('Slider Error');
            return null;
        }    
        

        return (
            <div className='archivePage' ref={this.setArchivePgRef}>
                <div className='archivePage__height'></div>
                { this.renderArtList() }
            </div>
        )
    }
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