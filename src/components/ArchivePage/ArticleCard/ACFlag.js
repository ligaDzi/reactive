import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

const ACFlag = ({ article, artClass, artStyle, setPositionArtFlag }) => {

    const artFlagRef = useRef();
    useEffect(() => {          
        setPositionArtFlag(artFlagRef.current.getBoundingClientRect().x);        
    }, []);

    return (
        <div 
            className={`archivePage-articleCard ${artClass}`} 
            ref={artFlagRef} 
            style={artStyle} 
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
}

export default ACFlag;