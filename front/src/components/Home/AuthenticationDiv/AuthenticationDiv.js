import React from 'react'
import './AuthenticationDiv.css'
import {Link} from 'react-router-dom'

function AuthenticationDiv(props) {
    return (
        <div className="authentication-main-div">
            <div className="authentication-div">
                <button className="authenticaton-div-btns">Login</button>
                <button className="authenticaton-div-btns">Register</button>
            </div>
            <div className="about-me-div">
                <Link to="/about-me">
                    <button className="about-me-div-btn">About me</button>
                </Link>
            </div>
        </div>
    )
}

export default AuthenticationDiv;