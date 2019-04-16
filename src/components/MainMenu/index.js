import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

 import { loadMenu } from '../../AC'
 import { mapToArr } from '../../helpers'

import ListMainMenu from './ListMainMenu'
import CopyrightMenu from './CopyrightMenu'
import ContactUsMainMenu from './ContactUsMainMenu'
import DescriptionMainMenu from './DescriptionMainMenu'

import './style.sass'
import '../../style/_position.sass'

class MainMenu extends Component {

    static propTypes = {
        //from store
        isMenuActive: PropTypes.bool,
        loadMenu: PropTypes.func.isRequired,
    }
    
    componentDidMount = () => {
        const { loadMenu } = this.props;

        loadMenu(); 
    }

    render() {
        const { isMenuActive } = this.props;
        const active = isMenuActive ? 'active' : '';
        

        return (
            <div className={`main-menu ${active}`} ref='mainMenu'>
                <div className='extender'></div>
                <div className='main-menu__root'>
                    <div className='main-menu__content'>
                        <div className='flex wide'></div>
                        <div className='flex wide'>
                            <ListMainMenu 
                                mainMenuRef = {this.refs.mainMenu}                               
                            />
                        </div>
                        <div className='flex narrow'></div>
                        <div className='flex narrow'>
                            <div className='m-m__empty flex fa-start fj-start'></div>
                            <DescriptionMainMenu />
                            <div className='m-m__empty m-m__empty__two flex fa-start fj-start'></div>
                            <ContactUsMainMenu />
                            <div className='m-m__empty flex fa-start fj-start'></div>
                        </div>
                        <div className='flex wide'>
                            <CopyrightMenu />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isMenuActive: state.menu.isActive
    }
}

const maToDispatch = {
    loadMenu
}

const decorator = connect( mapStateToProps, maToDispatch );

export default decorator( MainMenu );