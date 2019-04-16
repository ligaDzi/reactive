import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

class ArticleCategories extends Component {

    static propTypes = {
        //from component
        categories: PropTypes.array,
        classCategor: PropTypes.string.isRequired
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        const { categories } = this.props;

        categories.forEach( (item, i) => {
            if( item.id !== nextProps.categories[i].id ) return true;
        });

        return false;
    }
    
    showCategories = categories => {
        const cateroriesValue = categories.map( cat => cat.name );
        return cateroriesValue.join(' / ');
    }

    render() {
        const { classCategor, categories } = this.props;
        
        return(
            <div className= {classCategor}>
                {this.showCategories(categories)}
            </div>
        )

    }
}

export default ArticleCategories;

// export default function ArticleCategories(props){  

//     const showCategories = categories => {
//         const cateroriesValue = categories.map( cat => cat.name );
//         return cateroriesValue.join(' / ');
//     }
//     console.log('===', 'render()');
//     return(
//         <div className= {props.classCategor}>
//             {showCategories(props.categories)}
//         </div>
//     )
// }

// ArticleCategories.propTypes = {
//     //from component
//     categories: PropTypes.array,
//     classCategor: PropTypes.string.isRequired
// }