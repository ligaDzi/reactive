import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadAllCategories } from '../../../AC'
import { mapToArr } from '../../../helpers'

import Categorie from '../ItemCategoriesMenu'

import './style.sass'
import '../../../style/_position.sass'

class ListCategoriesMenu extends Component {
    
    static propTypes = {
        //from store
        categories: PropTypes.array,
        selectedCategor: PropTypes.array,
        loadAllCategories: PropTypes.func.isRequired
    }
    
    componentDidMount = () => {
        this.props.loadAllCategories();
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        
        const { categories} = this.props;        

        if(categories.length === 0) return true;

        categories.forEach( (categor, i) => {
            if(categor.id !== nextProps.categories[i].id) return true;
        })
                 
        return false;
    }

    renderList = () => {
        const { categories } = this.props;

        return categories.map( categor => {
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
        categories: mapToArr(state.categories.all),
        selectedCategor: state.categories.selected
    }
}

const mapToDispatch = {
    loadAllCategories
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( ListCategoriesMenu );