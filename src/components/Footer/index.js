import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMenu, loadContactUs } from '../../AC'
import { mapToArr } from '../../helpers'

import FormFooter from './FormFooter'
import LinksFooter from './LinksFooter'
import ContactUsList from './ContactUsList'
import Text90Deg from '../Carousel/Text90Deg'
import Loader from '../Loader'

import './style.sass'
import '../../style/_position.sass'

class Footer extends Component {

    static propTypes = {
        //from store
        menu: PropTypes.shape({
            isLoading: PropTypes.bool,
            isLoaded: PropTypes.bool,
            isError: PropTypes.bool,
            entities: PropTypes.array
        }),
        contactUs: PropTypes.shape({
            isLoading: PropTypes.bool,
            isLoaded: PropTypes.bool,
            isError: PropTypes.bool,
            entities: PropTypes.array
        }),
        loadMenu: PropTypes.func.isRequired,
        loadContactUs: PropTypes.func.isRequired
    }

    componentDidMount = () => {
        const { contactUs, loadContactUs } = this.props;
        
        if(!contactUs.isLoaded && !contactUs.isLoading) loadContactUs();
    }

    shouldComponentUpdate = (nextProps, nextState) => {

        const { menu, contactUs } = this.props; 
        const cotacts = contactUs.entities;       
        const menus = menu.entities;       
                
        if( menus.length === 0 || cotacts.length === 0 ) return true;

        for (let i = 0; i < cotacts.length; i++) {            
            if( cotacts[i].id !== nextProps.contactUs.entities[i].id) return true;            
        }

        for (let i = 0; i < menu.length; i++) {            
            if( menu[i].id !== nextProps.menu[i].id) return true;            
        }

        return false;        
    }
    
    handleEmailSubmit = email => {
        console.log('===', 'email = ', email);        
    }
    
    showContactUs = () => {
        return (
            <div className = 'contact-text'>
                <Text90Deg text = 'Contact Us' />
            </div>
        )
    }

    renderContactList = () => {
        const { contactUs } = this.props;  
        
        if(contactUs.isLoading) return <div className='contact-list '> <Loader color='white' /> </div>
        if(contactUs.isError){
            console.error('ContactUs error');
            return null;
        } 
        return <ContactUsList contactUs = {contactUs.entities} />
    }

    renderLinksList = () => {
        const { menu } = this.props;

        if(menu.isLoading) return <div className='links-footer flex fa-start fj-start'> <Loader color='white' /> </div>
        if(menu.isError){
            console.error('Menu error');
            return null;
        }
        return <LinksFooter links = {menu.entities} />
    }
    
    render() {
        return (
            <div className='footer'>
                <div className='footer-content flex'>
                    <div className='footer-content__form flex'>
                        <div className='footer-cloumn__null fa-start'></div>
                        <FormFooter emailSubmit = {this.handleEmailSubmit} />
                    </div>
                    <div className='footer-content__list flex'>
                        <div className='footer-cloumn__null fa-start'></div>
                        {this.renderLinksList()}
                        <div className='footer-cloumn__null fa-start'></div>
                        {this.renderContactList()}
                        <div className='footer-cloumn__null fa-start'></div>
                        <div className='footer-column__contact flex fa-start fj-end'>
                            {this.showContactUs()}
                        </div>
                    </div>
                </div>
                <div className='footer-copyright flex fj-end fa-end'>© 2019 Reactive Group Inc.</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        menu: {
            isLoading: state.menu.isLoading,
            isLoaded: state.menu.isLoaded,
            isError: state.menu.isError,
            entities: mapToArr(state.menu.entities)
        },
        contactUs: {
            isLoading: state.contactUs.isLoading,
            isLoaded: state.contactUs.isLoaded,
            isError: state.contactUs.isError,
            entities: mapToArr(state.contactUs.entities)
        }
    }
}

const mapToDispatch = {
    loadMenu,
    loadContactUs
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( Footer );