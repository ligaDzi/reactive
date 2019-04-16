import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

class LinksCOA extends PureComponent {

    static propTypes = {
        //from component
        autor: PropTypes.string,
        isOpen: PropTypes.bool
    }

    render() {
        const { autor, isOpen } = this.props;
        const open = isOpen ? 'open' : '';
        
        return (
            <div className = 'lincs-coa'>
                <div className = 'lincs-coa__content'>
                    <div className = {`lincs-content__autor ${open}`}>
                        <div> Autor: </div>
                        <div className = 'lincs-autor__txt'> {autor} </div>
                    </div>
                </div>
                <div className = {`lincs-coa__btn ${open}`}>
                    <div  className = 'lincs-btn__wrapp'>
                        <button  className = 'lincs-btn__button'>
                            <span  className = 'lincs-btn__txt'> Scroll to read </span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LinksCOA;