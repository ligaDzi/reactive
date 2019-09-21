import React, { Component, PureComponent } from 'react'
import Proptypes from 'prop-types'
import { connect } from 'react-redux'

import { visibleMenuCategories } from '../AC'

import Carousel from './Carousel'
import Articles from './Articles'
import ScrollToTop from './ScrollToTop'


class StartPage extends PureComponent{  

    static propTypes = {
        //from Store
        isCatMenuHidden: Proptypes.bool,
        visibleMenuCategories: Proptypes.func.isRequired
    }

    componentDidMount = () => {
        const { isCatMenuHidden, visibleMenuCategories } = this.props;
        if(isCatMenuHidden) {
            visibleMenuCategories();
        }
    }

    render() {   
        return (
            <div>
                <ScrollToTop />
                <Carousel />
                <Articles />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isCatMenuHidden: state.categories.isHidden
    }
}

const mapToDispatch = {
    visibleMenuCategories
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( StartPage );