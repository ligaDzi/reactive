import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import '../style/_animation.sass'

export default (OriginalComponent) => class Utils extends Component{
   
    getUniqId = () => {
        return Date.now() + Math.random();
    }
    
    textToParagArr = (description, size) => {
        
        let words = description.split(' ');        
        let spans = [];
        let spn = '';
        for(let i = 0, len = words.length; i < len; i++){
            
            if( words[i].length < (size - spn.length) ){
                spn += ` ${words[i]}`;
            } else {
                spans.push(this._getBlock(spn));
                spn = words[i];
            }
            if((i + 1) === len){
                spans.push(this._getBlock(spn));
            }
        }
        return spans;
    }

    _getBlock = (spn) => {
        return (            
            <div key={this.getUniqId()}>
                <CSSTransitionGroup
                    transitionName = 'title-parag'
                    transitionAppear
                    transitionAppearTimeout = {500}
                    transitionEnterTimeout = {100}
                    transitionLeaveTimeout = {100}
                >                    
                    <p className='title-parag leave6000'> {spn.trim()} </p>
                </CSSTransitionGroup>
            </div>
        )
    }

    render() {
        return (
            <OriginalComponent 
                {...this.props} {...this.state} 
                getUniqId = {this.getUniqId} 
                textToParagArr = {this.textToParagArr} 
            />
        )
    }
}