import React from 'react'
import {Link} from 'react-router-dom'

import './MainHeader.css'

class MainHeader extends React.Component {
    render() {
        return (
            <div className="main-header-div">
                <nav>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/fight-list"><li>Fight List</li></Link>
                        <Link to="/card-draw"><li>Card Draw</li></Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default MainHeader