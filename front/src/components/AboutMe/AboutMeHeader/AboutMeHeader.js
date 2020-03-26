import React from 'react'
import './AboutMeHeader.css'

class AboutMeHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false
        }
    }
    handleHover = () => {
        this.setState({ hovered: true })
    }
    handleHoverLeave = () => {
        this.setState({ hovered: false })
    }

    render() {
        var lis = this.props.divs.map((div, i) => {
            return (
                <li className="about-me-header-ul-li"
                    key={i}
                    onMouseEnter={() => this.props.divHovered(div)}>
                    {div}
                </li>
            )
        })
        return (
            <nav className={this.state.hovered ? "about-me-header about-me-header-active" : "about-me-header"}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHoverLeave} >
                <ul className={this.state.hovered ? "about-me-header-ul-active" : "about-me-header-ul"}>
                    {lis}
                </ul>
                {this.state.hovered ? null :
                <div className="arrow-div">
                    <i className="fas fa-arrow-alt-circle-right"></i>
                    </div>}
            </nav>
        )
    }
}

export default AboutMeHeader;