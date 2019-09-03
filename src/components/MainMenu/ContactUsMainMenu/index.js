import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'

import { mapToArr } from '../../../helpers'

import './style.sass'
import '../../../style/_position.sass'

class ContactUsMainMenu extends Component {

    static propTypes = {
        //from store
        contact: PropTypes.array,
        isMenuActive: PropTypes.bool,
        isContactsLoaded: PropTypes.bool
    }
    
    shouldComponentUpdate = (nextProps, nextState) => {
        const { isMenuActive, contact, isContactsLoaded } = this.props;

        if( isMenuActive !== nextProps.isMenuActive ) return true;
        if( isContactsLoaded !== nextProps.isContactsLoaded ) return true;

        for (let i = 0; i < contact.length; i++) {   
            if( contact[i].id !== nextProps.contact[i].id ) return true;
        }
        return false;
    }

    renderListCMM = list => {
        return list.map( item => {
            return <ItemContactMM key = {item.id} contact = {item} />
        });
    }

    render() {
        const { isMenuActive, contact } = this.props;
        

        return (        
            <div className='cntUs-menu flex fa-start fj-sb'> 
                            
                <CSSTransitionGroup
                    transitionName = 'cntUsMenu'
                    transitionEnterTimeout = {1100}
                    transitionLeaveTimeout = {200}
                    component = 'div'            
                >
                    { isMenuActive ? this.renderListCMM(contact) : null }
                </CSSTransitionGroup>
            </div>
        )

    }
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

function mapStateToProps(state) {
    return {
        isMenuActive: state.menu.isActive,
        contact: mapToArr(state.contactUs.entities),
        isContactsLoaded: state.contactUs.isLoaded
    }
}

const decorator = connect( mapStateToProps );

export default decorator( ContactUsMainMenu );