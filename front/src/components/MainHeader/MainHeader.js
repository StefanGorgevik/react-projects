import React from 'react'
import { Link } from 'react-router-dom'

import './MainHeader.css'

class MainHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false
        }
    }
    hoverHandler = () => {
        console.log('entered')
        this.setState({ hovered: true })

    }

    hoverLeaveHandler = () => {
        console.log('left')

        this.setState({ hovered: false })
    }

    render() {
        return (
            <div className="main-header-div">
                <nav>
                    <ul>
                        <Link to="/"><li>Home</li></Link>

                        <li onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverLeaveHandler}>Game list</li>

                        <Link to="/card-draw"><li>Card Draw</li></Link>
                    </ul>
                   
                </nav>
                {/* {this.state.hovered ?  */}
                
                <div className="hovered-div">
                    <ul>
                        <Link to="/fight-list"><li>Fight List</li></Link>
                        <Link to="/game-two"> <li>Game Two</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MainHeader