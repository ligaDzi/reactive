import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadAllCategories, changeSelectedCategor } from '../../../AC'

import Categorie from '../ItemCategoriesMenu'

import './style.sass'
import '../../../style/_position.sass'

class ListCategoriesMenu extends Component {
    
    static propTypes = {
        //fro component
        isActive: PropTypes.bool,
        //from store
        categories: PropTypes.array,
        selectedCategor: PropTypes.array,
        loadAllCategories: PropTypes.func.isRequired,
        changeSelectedCategor: PropTypes.func.isRequired,
    }
    
    componentDidMount = () => {
        this.props.loadAllCategories();
    }

    renderList = () => {
        const { categories, isActive, changeSelectedCategor, selectedCategor } = this.props;

        return categories.map( categor => {
            return (
                <li key = {categor.id}>
                    <Categorie                         
                        categorie = {categor} 
                        isMenuActive = {isActive} 
                        changeSelectedCategor = {changeSelectedCategor}
                    />
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
        categories: state.categories.all,
        selectedCategor: state.categories.selected
    }
}

const mapToDispatch = {
    loadAllCategories,
    changeSelectedCategor
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( ListCategoriesMenu );