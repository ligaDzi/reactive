import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ArticlesList from './ArticlesList'

import './style.sass'

class Articles extends Component{
    static propTypes = {
        //from component
        articles: PropTypes.array
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

export default Articles;