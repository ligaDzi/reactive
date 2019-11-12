import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flipped } from 'react-flip-toolkit'
import { Image, Transformation } from 'cloudinary-react'


import './style.sass'

class NextOpenArticle extends Component {

    static propTypes = {
        //from component
        article: PropTypes.object
    }

    render() {
        const { article } = this.props;
        
        
        return (    
            <Flipped 
                flipId = {`article-card-${article.id}`}                
            >
                <div className = 'article-next'>
                    <Image publicId={`reactive/${article.images[0]}`} >
                        <Transformation flags={["progressive", "progressive:semi"]} />
                    </Image> 
                </div>
            </Flipped>        
        )
    }
}

export default NextOpenArticle;