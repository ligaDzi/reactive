import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Title from './TitleCategoriesMenu'
import List from './ListCategoriesMenu'
import Cleare from './CleareCategoriesMenu'

import './style.sass'
import '../../style/_position.sass'


class CategoriesMenu extends Component {
    static propTypes = {
        //from component
        isCategorActive: PropTypes.bool,
    }

    render() {
        const { isCategorActive } = this.props;
        const active = isCategorActive ? 'active' : '';
        
        
        return (
            <div 
                className={`categor-menu ${active}`} 
            >
                <div className='categor-menu__content'>
                    <div className='flex'></div>
                    <div className='flex'>
                        <Title isActive = {isCategorActive} />
                    </div>
                    <div className='flex'>
                        <List />
                    </div>
                    <div className='flex'></div>
                    <div className='flex fa-end fj-start'>
                        <Cleare />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isCategorActive: state.categories.isActive
    }
}

const decorator = connect( mapStateToProps );

export default decorator( CategoriesMenu );


