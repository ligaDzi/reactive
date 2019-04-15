import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flipped } from 'react-flip-toolkit'
import AOS from 'aos'

import ArticleCategories from '../ArticleCategories'
import ArticleImg from '../ArticleImg'
import ArticleDesc from '../ArticleDesc'
import CursorProvider from '../../Cursor/CursorProvider'

import './style.sass'
import '../../../style/_position.sass'

class ArticleCard extends Component {

    static propTypes = {
        //from component
        article: PropTypes.object,
        openArticle: PropTypes.func.isRequired,
        leaveCursor: PropTypes.func.isRequired,
    }
    
    componentDidMount(){
        
        AOS.init({
            duration : 2000,
            once: true
        })
    }

    handleClickACard = id => ev => {
        const { openArticle, leaveCursor } = this.props;

        leaveCursor();
        openArticle(id);
    }

    render() {
        const { article } = this.props;

        return (
            <Flipped flipId = {`article-card-${article.id}`}>
                <div className={`article-card`} onClick = { this.handleClickACard(article.id) } >
                    <Flipped inverseFlipId = {`article-card-${article.id}`}>
                        <div className={`article-card__anima`} data-aos="fade-up">
                            <CursorProvider text = 'open'>
                                <ArticleCategories 
                                    categories = {article.categories} 
                                    classCategor = 'article-categories' 
                                />
                                <ArticleImg name = {article.images[0]} />
                                <ArticleDesc text = {article.description} date = {article.date} />
                            </CursorProvider>
                        </div>
                    </Flipped>
                </div>
            </Flipped>
        )
    }
}

export default ArticleCard;