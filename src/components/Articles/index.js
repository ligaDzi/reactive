import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadArticlesFromTo  } from '../../AC'

import ArticlesList from './ArticlesList'

import './style.sass'

class Articles extends Component{

    static propTypes = {
        //from store
        articles: PropTypes.array,
        loadArticlesFromTo: PropTypes.func.isRequired
    }

    componentDidMount = () => {
        this.props.loadArticlesFromTo( 5, 10 );
    }

    render() {
        const { articles } = this.props;
        return (
            <div className='articles-section'>
                <ArticlesList articles = {articles} />
            </div>
        )
    }
}

function mapStateToDispatch(state) {
    return {
        articles: state.articles
    }
}

const mapToDispatch = {
    loadArticlesFromTo
}

const decorator = connect( mapStateToDispatch, mapToDispatch );

export default decorator( Articles );