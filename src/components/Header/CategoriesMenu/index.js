import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from '../TitleCategoriesMenu'
import List from '../ListCategoriesMenu'
import Cleare from '../CleareCategoriesMenu'

import utilsDecor from '../../../decorators/utils'

import './style.sass'
import '../../../style/_position.sass'


class CategoriesMenu extends Component {
    static propTypes = {
        //from component
        isCategorActive: PropTypes.bool,
        //from decorator
        getUniqId: PropTypes.func.isRequired
    }

    state = {
        cleare: false
    }

    updateMenu = () => {
        this.setState({
            cleare: !this.state.cleare
        })
    }

    render() {
        const { isCategorActive, getUniqId } = this.props;
        const { cleare } = this.state;
        const active = isCategorActive ? 'active' : '';
        const { keyMenu } = getUniqId();
        
        return (
            <div 
                className={`categor-menu ${active}`} 
                key = { cleare ? getUniqId() : keyMenu }
            >
                <div className='categor-menu__content'>
                    <div className='flex'></div>
                    <div className='flex'>
                        <Title isActive = {isCategorActive} />
                    </div>
                    <div className='flex'>
                        <List isActive = {isCategorActive} />
                    </div>
                    <div className='flex'></div>
                    <div className='flex fa-end fj-start'>
                        <Cleare 
                            isActive = {isCategorActive} 
                            updateMenu = {this.updateMenu}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default utilsDecor( CategoriesMenu );


