import React, { Component } from 'react'

import './style.sass'

class MenuBtn extends Component {

    static proptypes = {

    }

    handleClickBurger = ev => {
        this.refs.menuBtn.classList.toggle('active');        
    }

    render() {
        return (
            <button className='burger' ref='menuBtn' onClick = {this.handleClickBurger}>
                <div className='burger-content'>
                    <span className='burger-line'></span>
                    <span className='burger-line'></span>
                </div>
            </button>
        )
    }
}

export default MenuBtn;

