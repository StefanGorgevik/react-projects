import React from 'react'
import './Home.css'
// import { Link } from 'react-router-dom'
// import Answer from '../../assets/images/fight-list/answer.jpg'
// import Tools from '../../assets/images/fight-list/tools.jpg'
import FightListDiv from '../../components/Home/FightListDiv/FightListDiv'
import ToolsDiv from '../../components/Home/ToolsDiv/ToolsDiv'
import AuthenticationDiv from '../../components/Home/AuthenticationDiv/AuthenticationDiv'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="home">
                <FightListDiv />
                <ToolsDiv />
                <AuthenticationDiv />
            </div>
        )
    }
}

export default Home;