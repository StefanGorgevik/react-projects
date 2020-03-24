import React from 'react'
import './TechnicalSkills.css'


function TechnicalSkills(props) {
    return (
        <div className="technical-skills-div">
            <h1 className="about-me-divs-title">Technical Skills</h1>
            <div className="ul-div">
                <h1 className="ul-div-h1">Front-end</h1>
                <ul>
                    <li><i className="fas fa-circle-notch"></i>HTML</li>
                    <li><i className="fas fa-circle-notch"></i>CSS</li>
                    <li><i className="fas fa-circle-notch"></i>Bootstrap</li>
                    <li><i className="fas fa-circle-notch"></i>ReactJS</li>
                    <li><i className="fas fa-circle-notch"></i>DOM</li>
                </ul>
            </div>
            <div className="ul-div">
                <h1 className="ul-div-h1">Back-end</h1>
                <ul>
                    <li><i className="fas fa-circle-notch"></i>NodeJS</li>
                    <li><i className="fas fa-circle-notch"></i>MongoDB</li>
                </ul>
            </div>
            <div className="ul-div">
                <h1 className="ul-div-h1">Concepts and skills</h1>
                <ul>
                    <li><i className="fas fa-circle-notch"></i>MVC</li>
                    <li><i className="fas fa-circle-notch"></i>JSON</li>
                    <li><i className="fas fa-circle-notch"></i>API & RestAPI</li>
                    <li><i className="fas fa-circle-notch"></i>HTTP</li>
                    <li><i className="fas fa-circle-notch"></i>Databases</li>
                </ul>
            </div>
        </div>
    )
}

export default TechnicalSkills;