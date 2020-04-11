import React from 'react'
import './AuthenticationDiv.css'

function AuthenticationDiv(props) {
    return (
        <div className="authentication-main-div">
                <button className="authenticaton-div-btns">Login</button>
                <button className="authenticaton-div-btns">Register</button>
        </div>
    )
}

export default AuthenticationDiv;