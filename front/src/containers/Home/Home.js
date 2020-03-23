import React from 'react'
import './Home.css'
import GamesDiv from '../../components/Home/GamesDiv/GamesDiv'
import ToolsDiv from '../../components/Home/ToolsDiv/ToolsDiv'
import AuthenticationDiv from '../../components/Home/AuthenticationDiv/AuthenticationDiv'
import Welcome from '../../components/Home/Welcome/Welcome'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="home">
                <Welcome/>
                <div className="home-bottom-div">
                    <GamesDiv />
                    <ToolsDiv />
                    <AuthenticationDiv />
                </div>
            </div>
        )
    }
}

export default Home;