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

    return (
        <div className = 'imglist__wrapp' style = {{transform: `translateY(${-100 * activeImg}vh)`}}>
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