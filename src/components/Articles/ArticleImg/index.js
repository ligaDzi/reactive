import React from 'react'
import Proptypes from 'prop-types'

import './style.sass'
import '../../../style/_position.sass'

export default function ArticleImg(props){
    const { name } = props;

    return (        
        <div className='article-imgblock flex-center'>                
            <img className='article-img' src={`./src/img/${name}`} />
        </div>
    )
}

ArticleImg.propTypes = {
    //from component
    name: Proptypes.string
}