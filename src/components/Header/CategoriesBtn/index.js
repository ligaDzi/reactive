import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

class CategoriesBtn extends Component {

    static propTypes = {
        //from component
        isCategorActive: PropTypes.bool,
        isMenuActive: PropTypes.bool,
        activatedCategorMenu: PropTypes.func.isRequired
    }

    handleClickCategorMenu = ev => {
        this.props.activatedCategorMenu();     
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

export default CategoriesBtn;