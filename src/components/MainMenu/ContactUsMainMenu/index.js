import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import './style.sass'
import '../../../style/_position.sass'


const ContactUsMainMenu = props => {
    const { contact, isMenuActive } = props;

    const renderListCMM = list => {
        return list.map( item => {
            return <ItemContactMM key = {item.id} contact = {item} />
        });
    }

    return (        
        <div className='cntUs-menu flex fa-start fj-sb'> 
                        
            <CSSTransitionGroup
                transitionName = 'cntUsMenu'
                transitionEnterTimeout = {1100}
                transitionLeaveTimeout = {200}
                component = 'div'            
            >
                { isMenuActive ? renderListCMM(contact) : null }
            </CSSTransitionGroup>
        </div>
    )
} 

ContactUsMainMenu.propTypes = {
    //from component
    contact: PropTypes.array,
    isMenuActive: PropTypes.bool
}



const ItemContactMM = props => {
    return (        
        <div>                
            <div>
                <h6 className='cntUs-menu__title cntUs-menu__txt'> {props.contact.title} </h6>
            </div>
            <div>
                <p className='cntUs-menu__txt'> {props.contact.adress} </p>
                <p className='cntUs-menu__txt'> {props.contact.email} </p>
                <p className='cntUs-menu__txt'> {props.contact.phone} </p>
            </div>
        </div> 
    )

}

ItemContactMM.propTypes = {
    //from component
    contact: PropTypes.object
}

export default ContactUsMainMenu;