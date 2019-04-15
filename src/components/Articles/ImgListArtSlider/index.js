import React, { Component } from 'react'
import PropTypes from 'prop-types'

import utils from '../../../decorators/utils'

import './style.sass'
import '../../../style/_position.sass'

const ImgListArtSlider = ({ imgList, activeImg, getUniqId }) => {

    const renderList = imgList => {
        return imgList.map( img => (
            <img key = {getUniqId()} className = 'article-open__img' src = {`./src/img/${img}`} />            
        ))
    }

    const getIndex = activeImg => {
        if( activeImg > 0 ) {
            if( activeImg <= 2) {
                return 0.5;
            } else {
                return (1 + (activeImg * 0.1));
            }
        } else {
            return 0;
        }
    }

    return (
        <div className = 'imglist__wrapp' style = {{transform: `translateY(${(-100 * activeImg) - getIndex(activeImg)}vh)`}}>
            {renderList(imgList)}
        </div>
    )
}

ImgListArtSlider.propTypes = {
    //from component
    imgList: PropTypes.array,
    activeImg: PropTypes.number,
    //from decorator
    getUniqId: PropTypes.func.isRequired
}

export default utils( ImgListArtSlider );