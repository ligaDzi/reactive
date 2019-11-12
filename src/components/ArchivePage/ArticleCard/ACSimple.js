import React from 'react'
import PropTypes from 'prop-types'

import './style.sass'


const ACSimple = ({ article, artClass, artStyle, openArticle, leaveCursor }) => {

    const handleClickCmp = () => {        
        if(openArticle){
            leaveCursor();
            openArticle(article.id);
        }
    }     
       

    return (
        <div 
            className={`archivePage-articleCard ${artClass}`} 
            style={artStyle} 
            onClick={handleClickCmp}
        >
            <img src={`../src/img/${article.images[0]}`} />
            
        </div>
    )    
}

ACSimple.propTypes = {
    //From component
    article: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        text: PropTypes.string,
        autor: PropTypes.string,
        images: PropTypes.array,
        categories: PropTypes.array,
        isSlider: PropTypes.bool,
        date: PropTypes.string
    }),
    artClass: PropTypes.string,
    artStyle: PropTypes.object,
    openArticle: PropTypes.func.isRequired,
    leaveCursor: PropTypes.func.isRequired,
}

export default ACSimple;