import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import ACSimple from './ACSimple'
import ACFlag from './ACFlag'

import './style.sass'

const ArticleCard = ({ article, artClass, artStyle, isArtFlagRef, archivePgRef, setPositionArtFlag }) => {

    return (
        isArtFlagRef ? (
            <ACFlag 
                article={article}
                artClass={artClass}
                artStyle={artStyle}
                setPositionArtFlag={setPositionArtFlag}
            />
        ) : (
            <ACSimple 
                article={article}
                artClass={artClass}
                artStyle={artStyle}
            />
        )
    )
    
    // if(isArtFlagRef){
    //     const artFlagRef = useRef();
    //     useEffect(() => {
                
    //             setPositionArtFlag(artFlagRef.current.getBoundingClientRect().x);
            
    //     });
    //     return (
    //         <div 
    //             className={`archivePage-articleCard ${artClass}`} 
    //             ref={artFlagRef} 
    //             style={artStyle} 
    //         >
    //             <img src={`../src/img/${article.images[0]}`} />
                
    //         </div>
    //     )        
    // } else {
    //     return (
    //         <div 
    //             className={`archivePage-articleCard ${artClass}`} 
    //             style={artStyle} 
    //         >
    //             <img src={`../src/img/${article.images[0]}`} />
                
    //         </div>
    //     )
    // }
}

ArticleCard.propTypes = {
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
    isArtFlagRef: PropTypes.bool,
    setPositionArtFlag: PropTypes.func,    
    archivePgRef: PropTypes.object,
}

export default ArticleCard;