import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { toggleMenuCategor } from '../../../AC'

import './style.sass'

class CategoriesBtn extends Component {

    static propTypes = {
        //from store
        isCategorActive: PropTypes.bool,
        toggleMenuCategor: PropTypes.func.isRequired,
        isMenuActive: PropTypes.bool,
    }

    handleClickCategorMenu = ev => {
        this.props.toggleMenuCategor();     
    }
    
    render() { 
        const { isCategorActive, isMenuActive } = this.props;
        const active = isCategorActive ? 'active' : '';
        const hidden = isMenuActive ? 'hidden' : '';

        return (           
            <button className={`categor-menu-btn ${active} ${hidden}`} onClick = {this.handleClickCategorMenu}>
                <div className='categor-menu-btn__content'>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                </div>
            </button>            
        )
    }
}

function mapStateToProps(state) {
    return {
        isMenuActive: state.menu.isActive,
        isCategorActive: state.categories.isActive
    }
}

const mapToDispatch = {
    toggleMenuCategor
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( CategoriesBtn );