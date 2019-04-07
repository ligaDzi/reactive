import React from 'react'
import PropTypes from 'prop-types'

import utils from '../../../decorators/utils'

import './style.sass'
import '../../../style/_position.sass'

function ArticleDesc(props){
    
    const { text, date, showDate } = props;

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
    date: PropTypes.string,
    //from decorator
    showDate: PropTypes.func.isRequired
}

export default utils( ArticleDesc );