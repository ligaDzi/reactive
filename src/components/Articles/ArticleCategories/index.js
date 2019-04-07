import React from 'react'
import PropTypes from 'prop-types'

import './style.sass'

export default function ArticleCategories(props){  

    const showCategories = categories => {
        const cateroriesValue = categories.map( cat => cat.name );
        return cateroriesValue.join(' / ');
    }
    
    return(
        <div className= {props.classCategor}>
            {showCategories(props.categories)}
        </div>
    )
}

ArticleCategories.propTypes = {
    //from component
    categories: PropTypes.array,
    classCategor: PropTypes.string.isRequired
}