import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMenu, loadAllCategories } from '../../AC'

import CategoriesMenu from './CategoriesMenu'
import ButtonHeader from './ButtonHeader'

import './style.sass'

class Header extends Component {
    static propTypes = {
        //from store
        menu: PropTypes.array,
        categories: PropTypes.array,
        loadMenu: PropTypes.func.isRequired,
        loadAllCategories: PropTypes.func.isRequired
    }

    state = {
        isCategorActive: false
    }

    componentDidMount = () => {
        this.props.loadMenu();
        this.props.loadAllCategories();        
    }

    activatedCategorMenu = () => {
        this.setState({
            isCategorActive: !this.state.isCategorActive
        })
    }

    render() {
        const { isCategorActive } = this.state;        

        return (
            <div className='header'>
                <ButtonHeader 
                    isCategorActive = {isCategorActive}
                    activatedCategorMenu = {this.activatedCategorMenu} 
                />
                <CategoriesMenu 
                    isCategorActive = {isCategorActive}
                />
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        menu: state.menu,
        categories: state.categories
    }
}

const mapToDispatch = {
    loadMenu,
    loadAllCategories
}

const decorator = connect( MapStateToProps, mapToDispatch ); 

export default decorator( Header );