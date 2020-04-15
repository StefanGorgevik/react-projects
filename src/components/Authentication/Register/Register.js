import React from 'react'
import './Register.css'
import '../Login/Login.css'

function Register(props) {
    return (
        <div className="register-main-div">
            <div className='register'>
                <h2>Register</h2>
                <input name="username" placeholder="Username" type="text" required />
                <input id="pw" name="password" placeholder="Password" type="password" required />
                <input name="email" placeholder="Email" type="text" required />
                <button>Register</button>
                <button onClick={props.clicked}>Close</button>
            </div>
        </div>
    )
}

export default Register;