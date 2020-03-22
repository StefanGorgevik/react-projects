import React from 'react'
import { Link } from 'react-router-dom'
import './AboutMeDiv.css'

class AboutMeDiv extends React.Component {
    render() {
        return (
            <div className="about-me-div">
                <Link to="/about-me">
                    <h1 className="about-me-h1">About me</h1>
                </Link>
            </div>
        )
    }
}

export default AboutMeDiv;