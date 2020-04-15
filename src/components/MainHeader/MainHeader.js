import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Authentication/Login/Login'
import Register from '../Authentication/Register/Register'
import './MainHeader.css'
import NewGroup from '../BudgetCalc/NewGroupForm/NewGroup/NewGroup'
import {connect} from 'react-redux'

class MainHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            loginClicked: false,
            registerClicked: false
        }
    }

    loginClickedHandler = () => {
        this.setState(prevState => ({
            loginClicked: !prevState.loginClicked
        }))
    }
    registerClickedHandler = () => {
        this.setState(prevState => ({
            registerClicked: !prevState.registerClicked
        }))
    }

    render() {
        return (
            <>

            {this.state.loginClicked ? 
            <Login clicked={this.loginClickedHandler} /> : null }

            {this.state.registerClicked ? 
            <Register clicked={this.registerClickedHandler} /> : null }
            
            <nav className="main-header">
                <ul className="main-header-ul">
                    <li className="main-header-ul-li"><Link to="/"> Home</Link></li>
                    <li className="main-header-ul-li">Game List
                         <div className="main-header-ul-li-div">
                            <Link to="/fight-list">Fight list</Link>
                            <Link to="/memory-card">Memory Card</Link>
                            <Link to="/guess-it">Guess It</Link>
                        </div>
                    </li>
                    <li className="main-header-ul-li">Tools
                        <div className="main-header-ul-li-div">
                            <Link to="/card-draw">Card Draw</Link>
                            <Link to="/stopwatch">Stopwatch</Link>
                        </div>
                    </li>
                    <li className="main-header-ul-li">Account
                        <div className="main-header-ul-li-div">
                            <Link to="#" onClick={this.loginClickedHandler}>Login</Link>
                            <Link to="#" onClick={this.registerClickedHandler}>Register</Link>
                        </div>
                    </li>
                </ul>
            </nav>
            </>
        )
    }
}


function mapStateToProps(state) {
    return {
        addNewGroupClicked: state.addNewGroupClicked
    }
}

export default connect(mapStateToProps)(MainHeader)