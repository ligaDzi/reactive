import React, { Component } from 'react'
import PropTypes from 'prop-types'

import utils from '../../../decorators/utils'

import ArticleCard from '../ArticleCard'

import './style.sass'

class ArticleList extends Component {

    static propTypes = {
        //from component
        articles: PropTypes.array
    }

    showArticleList = articles => {
        const { getUniqId } = this.props;

        return articles.map( article => {
            return <ArticleCard key = {getUniqId()} article = {article} />
        })
    }

    render() {
        const { articles } = this.props;
        return (
            <div className='articles-list'>
                {this.showArticleList(articles)}
            </div>
        )
    }
}

export default utils( ArticleList );