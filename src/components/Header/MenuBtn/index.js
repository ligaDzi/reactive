import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

class MenuBtn extends Component {

    static proptypes = {
        //from component
        isMenuActive: PropTypes.bool,
        activatedMainMenu: PropTypes.func.isRequired
    }

    handleClickBurger = ev => {   
        this.props.activatedMainMenu();    
    }

    render() {
        const { isMenuActive } = this.props;
        const active = isMenuActive ? 'active' : '';
        return (
            <button className={`burger ${active}`} onClick = {this.handleClickBurger}>
                <div className='burger-content'>
                    <span className='burger-line'></span>
                    <span className='burger-line'></span>
                </div>
            </button>
        )
    }
}

export default MenuBtn;

