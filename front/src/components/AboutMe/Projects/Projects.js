import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

function Projects(props) {
    return (
        <div className="projects-main-div">
            <h1 className="about-me-divs-title">Projects</h1>
            <div className="projects-div">
                <div className="project-info-div">
                    <h1 className="project-info-h1">Expense Calculator</h1>
                    <div className="project-info-content">
                        <p className="project-info-p">
                            Full-stack developed project, created with ReactJS, Node.js, and MongoDB. For the UI, I used plain HTML and
                            CSS. It is a calculator where you can keep track of your expenses and bought items. It was given as an ending project
                            by Semos Education. I also included a user info page and the option to add another user and merge both of your products.
                            I will also include it in this project as a tool.
                </p>
                        <Link to="//stark-island-29614.herokuapp.com"><button className="visit-btn">Visit the project</button></Link>
                    </div>
                </div>
                <div className="project-info-div">
                    <h1 className="project-info-h1">Body-building media - Upcoming...</h1>
                    <div className="project-info-content">
                        <p className="project-info-p">
                            Front-end developed project, created with ReactJS, Node.js, and MongoDB. For the UI, I used plain HTML and
                            CSS. It is a type of social media where you can keep track of your other users and their diets, workout plans and
                            personal info.
                </p>
                        <Link to="//stark-island-29614.herokuapp.com/"><button className="visit-btn">Visit the project</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;