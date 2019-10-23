import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'

import ArticleCard from '../ArticleCard'

import './style.sass'


class ArticlesList extends Component {

    static propTypes = {
        //From component
        articles: PropTypes.array,
        archivePgRef: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.archiveListRef = null;
        this.setArchiveListRef = elm => this.archiveListRef = elm;
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        const { articles, archivePgRef } = this.props;

        if( archivePgRef !== nextProps.archivePgRef ) return true;

        for (let i = 0; i < articles.length; i++) { 
                                
            if( articles[i].id !== nextProps.articles[i].id ) return true;
        }
        return false;
    }

    componentDidUpdate = () => {
        const { archivePgRef } = this.props;                       
        
        archivePgRef.onscroll = () => {                
            this.archiveListRef.scrollLeft = archivePgRef.scrollTop;                
        }
    }

    render() {
        const { articles } = this.props;
        return (
            <div className='archivePage-list'>
                <div className='archivePage-list__wrap' ref={this.setArchiveListRef}>
                    {
                        articles.map(art => (
                            <ArticleCard key={art.id} article={art} />
                        ))
                    }
                </div>
            </div>
        )
    }
}


export default ArticlesList;