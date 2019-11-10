import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Flipped } from 'react-flip-toolkit'

import ACSimple from './ACSimple'
import ACFlag from './ACFlag'
import CursorProvider from '../../Cursor/CursorProvider'

import './style.sass'

const ArticleCard = ({ article, artClass, artStyle, isArtFlagRef, setPositionArtFlag, openArticle, leaveCursor }) => {

    return (
        isArtFlagRef ? (
            <div>
                <CursorProvider text='open'>                    
                    <ACFlag 
                        article={article}
                        artClass={artClass}
                        artStyle={artStyle}
                        setPositionArtFlag={setPositionArtFlag}
                        openArticle={openArticle}
                        leaveCursor={leaveCursor}
                    />
                </CursorProvider>
            </div>
        ) : (
            <div>
                <CursorProvider text='open'>
                    <ACSimple 
                        article={article}
                        artClass={artClass}
                        artStyle={artStyle}
                        openArticle={openArticle}
                        leaveCursor={leaveCursor}
                    />
                </CursorProvider>
            </div>
        )
    )
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
    openArticle: PropTypes.func.isRequired,
    leaveCursor: PropTypes.func.isRequired,
}

export default ArticleCard;