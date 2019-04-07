import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ArticleCategories from '../ArticleCategories'

import './style.sass'

class TxtCOA extends Component {

    static propTypes = {
        //from component
        article: PropTypes.object,
        artNext: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.bool
        ]),
    }

    renderTxt = text => {

    }

    render() {
        const { article, artNext } = this.props;
        return (
            <div className = 'txtcoa__wrapp'>
                <div className = 'txtcoa__categories'>
                    <ArticleCategories categories = {article.categories} classCategor = {'txtcoa-cat__list'} />
                </div>
                <div>
                    <h1 className = 'txtcoa__title'> {article.title} </h1>
                </div>
                <div className = 'txtcoa__desc'>
                    <p> {article.description} </p>
                </div>
                <div className = 'txtcoa__text'>
                    <div className = 'txtcoa-text__content' dangerouslySetInnerHTML={{__html: article.text}} ></div>
                </div>
                <div className = 'txtcoa__uptitle'>
                    <div className = 'uptitle__txt'>
                        <span> { artNext ? 'Up Next' : '' } </span>
                    </div>
                </div>
                <div className = 'txtcoa__next'> 
                    <a> { artNext.title } </a> 
                </div>
                <div className = 'txtcoa__shadow'></div>
            </div>
        )
    }
}

export default TxtCOA;