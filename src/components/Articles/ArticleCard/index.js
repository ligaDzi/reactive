import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ArticleCategories from '../ArticleCategories'
import ArticleImg from '../ArticleImg'
import ArticleDesc from '../ArticleDesc'

import './style.sass'
import '../../../style/_position.sass'

class ArticleCard extends Component {

    static propTypes = {
        article: PropTypes.object
    }

    render() {
        const { article } = this.props;
        
        return (
            <div className='article-card'>
                <ArticleCategories categories = {article.categories} />
                <ArticleImg name = {article.images[0]} />
                <ArticleDesc text = {article.description} date = {article.date} />
            </div>
        )
    }
}

export default ArticleCard;