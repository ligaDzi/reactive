import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import LinkArticle from './LinkArticle'
import Text from './Text'

import './style.sass'
import '../../style/_position.sass'

const ReadOurArticles = ({ text }) => {

    return (
        <div className='readOurArt flex'>
            <div></div>
            <LinkArticle />
            <div></div>
            <Text text={text} />
            <div></div>
        </div>
    )
}

ReadOurArticles.propTypes = {
    text: PropTypes.string
}


export default ReadOurArticles;