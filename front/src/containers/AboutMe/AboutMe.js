import React from 'react'
import './AboutMe.css'
import AboutMeHeader from '../../components/AboutMe/AboutMeHeader/AboutMeHeader'
import EducationCourses from '../../components/AboutMe/EducationCourses/EducationCourses'
import PersonalInfo from '../../components/AboutMe/PersonalInfo/PersonalInfo'
import TechnicalSkills from '../../components/AboutMe/TechnicalSkills/TechnicalSkills'
import Projects from '../../components/AboutMe/Projects/Projects'

class AboutMe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            divs: ["Personal Info", "Education & Courses", "Technical Skills", "Projects"],
            hoveredDiv: ''
        }
    }

    divHovered = (div) => {
        console.log(div)
        this.setState({
            hoveredDiv: div
        })
    }

    renderSwitch() {
        switch (this.state.hoveredDiv) {
            case 'Personal Info':
                return <PersonalInfo/>;
            case 'Education & Courses':
                return <EducationCourses/>;
            case 'Technical Skills':
                return <TechnicalSkills/>;
            case 'Projects':
                return <Projects/>;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="about-me-main-div">
                <AboutMeHeader
                    divs={this.state.divs}
                    hoveredDiv={this.state.hoveredDiv}
                    divHovered={this.divHovered} />
                <div className="about-me-div">
                    {this.renderSwitch()}
                </div>
            </div>
        )
    }
}

export default AboutMe;