import React from 'react'
import PropTypes from 'prop-types'

import './style.sass'
import '../../../style/_position.sass'

export default function ArticleDesc(props){
    
    const { text, date } = props;

    const getNumSlide = num => {
        return num < 10 ? `0${num}` : num;
    }

    const showDate = dateStr => {
        const date = new Date(dateStr);
        const year = getNumSlide(date.getFullYear());
        const month = getNumSlide(date.getMonth());
        const day = getNumSlide(date.getDate());
        return `${year}.${month}.${day}`;
    }

    return (
        <div className='article-desc flex fa-start'>
            <div className='article-desc-text'>
                {text}
            </div>
            <div className='article-desc-date'>
                {showDate(date)}
            </div>
        </div>
    )
}

ArticleDesc.propTypes = {
    //from component
    text: PropTypes.string,
    date: PropTypes.string
}