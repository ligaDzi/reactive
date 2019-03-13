import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

 import { loadMenu } from '../../AC'

import ListMainMenu from './ListMainMenu'
import CopyrightMenu from './CopyrightMenu'
import ContactUsMainMenu from './ContactUsMainMenu'
import DescriptionMainMenu from './DescriptionMainMenu'

import './style.sass'
import '../../style/_position.sass'

class MainMenu extends Component {

    static propTypes = {
        //from component
        isMenuActive: PropTypes.bool,
        activatedMainMenu: PropTypes.func.isRequired,
        //from store
        menu: PropTypes.array,
        loadMenu: PropTypes.func.isRequired,
        contact: PropTypes.array
    }

    state = {
        description: this.props.menu[0].description
    }
    
    componentDidMount = () => {
        const { loadMenu } = this.props;

        loadMenu(); 
    }

    changeDesc = id => {
        const { menu } = this.props;
        const linkHover = menu.filter( item => item.id === id)[0];
        const desc = linkHover.description;

        this.setState({
            description: desc
        })
    }

    render() {
        const { isMenuActive, activatedMainMenu, menu, contact } = this.props;
        const { description } = this.state;
        const active = isMenuActive ? 'active' : '';

        return (
            <div className={`main-menu ${active}`} ref='mainMenu'>
                <div className='extender'></div>
                <div className='main-menu__root'>
                    <div className='main-menu__content'>
                        <div className='flex wide'></div>
                        <div className='flex wide'>
                            <ListMainMenu 
                                menus = {menu}
                                isMenuActive = {isMenuActive}
                                activatedMainMenu = {activatedMainMenu}
                                mainMenuRef = {this.refs.mainMenu}
                                changeDesc = {this.changeDesc}                                
                            />
                        </div>
                        <div className='flex narrow'></div>
                        <div className='flex narrow'>
                            <div className='m-m__empty flex fa-start fj-start'></div>
                            <DescriptionMainMenu 
                                description = {description}                            
                                isMenuActive = {isMenuActive}    
                            />
                            <div className='m-m__empty m-m__empty__two flex fa-start fj-start'></div>
                            <ContactUsMainMenu 
                                contact = {contact} 
                                isMenuActive = {isMenuActive}
                            />
                            <div className='m-m__empty flex fa-start fj-start'></div>
                        </div>
                        <div className='flex wide'>
                            <CopyrightMenu 
                                isMenuActive = {isMenuActive}                                
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        menu: state.menu,
        contact: state.contactUs
    }
}

const mapToDispatch = {
    loadMenu
}

const decorator = connect( MapStateToProps, mapToDispatch );

export default decorator( MainMenu );