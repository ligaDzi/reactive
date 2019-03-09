import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMenu, loadContactUs } from '../../AC'

import FormFooter from './FormFooter'
import LinksFooter from './LinksFooter'
import ContactUsList from './ContactUsList'
import Text90Deg from '../Carousel/Text90Deg'

import './style.sass'
import '../../style/_position.sass'

class Footer extends Component {

    static propTypes = {
        //from store
        menu: PropTypes.array,
        contactUs: PropTypes.array,
        loadMenu: PropTypes.func.isRequired,
        loadContactUs: PropTypes.func.isRequired
    }

    componentDidMount = () => {
        this.props.loadContactUs();
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

    render() {
        const { menu, contactUs } = this.props;

        return (
            <div className='footer'>
                <div className='footer-content flex'>
                    <div className='footer-content__form flex'>
                        <div className='footer-cloumn__null fa-start'></div>
                        <FormFooter emailSubmit = {this.handleEmailSubmit} />
                    </div>
                    <div className='footer-content__list flex'>
                        <div className='footer-cloumn__null fa-start'></div>
                        <LinksFooter links = {menu} />
                        <div className='footer-cloumn__null fa-start'></div>
                        <ContactUsList contactUs = {contactUs} />
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
        menu: state.menu,
        contactUs: state.contactUs
    }
}

const mapToDispatch = {
    loadMenu,
    loadContactUs
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( Footer );