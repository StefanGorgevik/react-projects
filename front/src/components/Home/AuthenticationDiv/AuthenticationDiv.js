import React from 'react'
// import { Link } from 'react-router-dom'
import './AuthenticationDiv.css'
import AboutMeDiv from './AboutMeDiv/AboutMeDiv'

class AuthenticationDiv extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="authentication-main-div">
                    <div className="authentication-div">

                    </div>
                    <AboutMeDiv/>
                </div>
        )
    }
}

export default AuthenticationDiv;