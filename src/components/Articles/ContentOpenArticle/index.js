import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

import TxtCOA from './TxtCOA'
import LinksCOA from './LinksCOA'

import './style.sass'

class ContentOpenArticle extends PureComponent {

    static propTypes = {
        //from component
        article: PropTypes.object,
        artNext: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.bool
        ]),
        isOpen: PropTypes.bool
    }

    render() {
        const { article, artNext, isOpen } = this.props;
        return (
            <div className = 'cont-art__wrapp'>
                <TxtCOA 
                    article = {article} 
                    artNext = {artNext} 
                />
                <LinksCOA 
                    autor = {article.autor}
                    isOpen = {isOpen}
                />
            </div>
        )
    }
}

export default ContentOpenArticle;