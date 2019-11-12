import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flipped } from 'react-flip-toolkit'

import './style.sass'

class NextOpenArticle extends Component {

    static propTypes = {
        //from
    }

    render() {
        const { article } = this.props;
        
        
        return (    
            <Flipped 
                flipId = {`article-card-${article.id}`}                
            >
                <div className = 'article-next'>
                    <img src = {`../src/img/${article.images[0]}`} />                    
                </div>
            </Flipped>        
        )
    }
}

export default NextOpenArticle;