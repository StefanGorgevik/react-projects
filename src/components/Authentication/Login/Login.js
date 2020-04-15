import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login(props) {
    return (
        <div className="login-main-div">
            <div className='login'>
                <h2>Sign in</h2>
                <input name="username" placeholder="Username" type="text" required="" />
                <input id="pw" name="password" placeholder="Password" type="password" required />
                <button>Sign In!</button>
                <button onClick={props.clicked}>Close!</button>
                <Link to="#" className='forgot'>Forgot your password?</Link>
            </div>
        </div>
    )
}

export default Login