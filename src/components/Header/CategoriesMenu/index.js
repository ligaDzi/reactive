import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.sass'
import '../../../style/_position.sass'

class CategoriesMenu extends Component {
    static propTypes = {
        isCategorActive: PropTypes.bool
    }

    render() {
        const { isCategorActive } = this.props;
        const active = isCategorActive ? 'active' : '';
        
        return (
            <div className={`categor-menu ${active}`}>
                <div className='categor-menu__content'>
                    <div className='flex'></div>
                    <div className='flex'></div>
                    <div className='flex'></div>
                    <div className='flex'></div>
                    <div className='flex'></div>
                </div>
            </div>
        )
    }
}

export default CategoriesMenu;