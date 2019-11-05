import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

const ACFlag = ({ article, artClass, artStyle, setPositionArtFlag, openArticle, leaveCursor }) => {

    const artFlagRef = useRef();
    useEffect(() => {          
        setPositionArtFlag(artFlagRef.current.getBoundingClientRect().x);        
    }, []);

    const handleClickCmp = () => {
        if(openArticle){
            leaveCursor();
            openArticle(article.id);
        }
    }

    return (
        <div 
            className={`archivePage-articleCard ${artClass}`} 
            ref={artFlagRef} 
            style={artStyle}
            onClick={handleClickCmp} 
        >
            <img src={`../src/img/${article.images[0]}`} />
            
        </div>
    )    
}

ACFlag.propTypes = {
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
    setPositionArtFlag: PropTypes.func,   
    openArticle: PropTypes.func.isRequired,
    leaveCursor: PropTypes.func.isRequired,
}

export default ACFlag;