import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'

import ArticleCategories from '../ArticleCategories'
import ArticleImg from '../ArticleImg'
import ArticleDesc from '../ArticleDesc'

import './style.sass'
import '../../../style/_position.sass'

class ArticleCard extends Component {

    static propTypes = {
        //from component
        article: PropTypes.object
    }

    componentDidMount(){
        AOS.init({
            duration : 2000,
            once: true
        })
    }

    render() {
        const { article, mixingArrToId } = this.props;
        return (
            <div className='article-card' data-aos="fade-up">
                <ArticleCategories categories = {article.categories} />
                <ArticleImg name = {article.images[0]} />
                <ArticleDesc text = {article.description} date = {article.date} />
            </div>
        )
    }
}

export default ArticleCard;