import React from 'react'
import { Link } from 'react-router-dom'

import './MainHeader.css'

function MainHeader(props){
        return (
            <nav>
                <ul >
                <Link to="/"> <li>Home</li></Link>
                    <li>Game List
                         <div >
                            <Link to="/fight-list">Fight list</Link>
                            <Link to="#">Game Two</Link>
                            <Link to="#">Game Three</Link>
                        </div>
                    </li>
                    <li>Tools
                        <div>
                            <Link to="/card-draw">Card Draw</Link>
                            <Link to="#">Game Two</Link>
                            <Link to="#">Game Three</Link>
                        </div>
                    </li>
                    <li>Account
                        <div>
                            <Link to="#">Login</Link>
                            <Link to="#">Register</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        )
}

export default MainHeader