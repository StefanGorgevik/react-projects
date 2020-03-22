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
                <li key={i} onMouseEnter={() => this.props.divHovered(div)}>
                    {div}
                </li>
            )
        })
        return (
            <nav onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverLeave} className="about-me-header">
                {this.state.hovered ? <ul>
                    {lis}
                </ul> :
                    <div className="arrow-div">
                        <span>
                            <i class="fas fa-arrow-alt-circle-right">

                            </i></span>
                    </div>}

            </nav>
        )
    }
}

export default AboutMeHeader;