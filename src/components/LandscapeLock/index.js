import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

class LandscapeLock extends PureComponent {

    static propTypes = {
        //from
    }

    render() {
        return (
            <div className = 'landscape'>
                <div className = 'landscape__wrapp'>
                    <div className = 'landscape__logo'> reactive. </div>
                    <div className = 'landscape-row'>
                        <span> This site is best viewed </span>
                    </div>
                    <div className = 'landscape-row'>
                        <span> in a </span>
                        <span> portrait mode </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandscapeLock;