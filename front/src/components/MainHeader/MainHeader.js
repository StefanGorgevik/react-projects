import React from 'react'
import { Link } from 'react-router-dom'

import './MainHeader.css'

function MainHeader(props){
        return (
            <nav className="main-header">
                <ul className="main-header-ul">
                <li className="main-header-ul-li"><Link to="/"> Home</Link></li>
                    <li className="main-header-ul-li">Game List
                         <div className="main-header-ul-li-div">
                            <Link to="/fight-list">Fight list</Link>
                            <Link to="#">Game Two</Link>
                            <Link to="#">Game Three</Link>
                        </div>
                    </li>
                    <li className="main-header-ul-li">Tools
                        <div className="main-header-ul-li-div">
                            <Link to="/card-draw">Card Draw</Link>
                            <Link to="#">Game Two</Link>
                            <Link to="#">Game Three</Link>
                        </div>
                    </li>
                    <li className="main-header-ul-li">Account
                        <div className="main-header-ul-li-div">
                            <Link to="#">Login</Link>
                            <Link to="#">Register</Link>
                        </div>
                    </li>
                     <li className="main-header-ul-li"><Link to="/about-me">About me</Link></li>
                </ul>
            </nav>
        )
}

export default MainHeader