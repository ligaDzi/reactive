import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadAllCategories } from '../../../AC'
import { mapToArr } from '../../../helpers'

import Categorie from '../ItemCategoriesMenu'
import Loader from '../../Loader'

import './style.sass'
import '../../../style/_position.sass'

class ListCategoriesMenu extends Component {
    
    static propTypes = {
        //from store
        categories: PropTypes.shape({
            isMenuActive: PropTypes.bool,
            isLoading: PropTypes.bool,
            isLoaded: PropTypes.bool,
            isError: PropTypes.bool,
            entities: PropTypes.array
        }),
        selectedCategor: PropTypes.array,
        loadAllCategories: PropTypes.func.isRequired
    }

    componentDidUpdate = () => {
        const { loadAllCategories } = this.props;
        const { isLoading, isLoaded, isMenuActive } = this.props.categories;

        if(isMenuActive && !isLoaded && !isLoading) loadAllCategories();
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        
        const { categories } = this.props;        

        if( categories.isMenuActive !== nextProps.categories.isMenuActive ) return true;
        if( categories.isLoading !== nextProps.categories.isLoading ) return true;
        if( categories.isLoaded !== nextProps.categories.isLoaded ) return true;
        if( categories.isError !== nextProps.categories.isError ) return true;
        if(categories.entities.length === 0) return true;

        categories.entities.forEach( (categor, i) => {
            if(categor.id !== nextProps.categories.entities[i].id) return true;
        })
                 
        return false;
    }

    renderList = () => {
        const { categories } = this.props;

        if(categories.isLoading) return <div className='loaderWrapper'> <Loader color='black' /> </div>
        if(categories.isError){
            console.error('Categories menu error');
            return null;
        }

        return categories.entities.map( categor => {
            return (
                <li key = {categor.id}>
                    <Categorie categorie = {categor} />
                </li>
            )
        })
    }

    render() {               

        return (
            <div className='categor-menu__list flex fa-start fj-start'>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: {
            isMenuActive: state.categories.isActive,
            isLoading: state.categories.isLoading,
            isLoaded: state.categories.isLoaded,
            isError: state.categories.isError,
            entities: mapToArr(state.categories.entities),
        },
        selectedCategor: state.categories.selected
    }
}

const mapToDispatch = {
    loadAllCategories
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( ListCategoriesMenu );