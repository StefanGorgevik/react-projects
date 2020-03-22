import React from 'react'
import Answer from '../../../assets/images/fight-list/answer.jpg'
import Tools from '../../../assets/images/fight-list/tools.jpg'
import { Link } from 'react-router-dom'
import './FightListDiv.css'
import firstImage from '../../../assets/images/fight-list/fight-list-img-1.jpg'

class FightListDiv extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flCount: 1,
            divs: [1, 2, 3]
        }
    }

    //   componentDidMount() {
    //     setInterval(() => {
    //         this.setState((prevState) => ({
    //             flCount: prevState.flCount + 1
    //         })
    //         )
    //         if (this.state.flCount === 4) {
    //             this.setState({
    //                 flCount: 1
    //             })
    //         }
    //     }, 5000);
    // }

    dotClicked = (i) => {
        console.log(i)
        this.setState({
            flCount: i
        })
    }

    render() {
        var dots = this.state.divs.map((div, i) => {
            return (
                <span onClick={() => this.dotClicked(i + 1)}
                    key={i}
                    className={this.state.flCount === i + 1 ? "dot active-dot" : "dot"}></span>
            )
        })
        return (
            <div className={`fight-list-div fight-list-div-${this.state.flCount}`}>
                    {this.state.flCount === 1 ?
                        <div className="div1">
                            <h1>Are you ready for the challenge?</h1>
                            <img src={firstImage} alt="first-img" />
                            <h2>You get 30 seconds</h2>
                            <h2>You get 10 questions</h2>
                            <h2>Give as many answers as you can!</h2>
                        </div> : null}
                    {this.state.flCount === 2 ?
                        <div className="div2">
                            <h1>It is quite simple</h1>
                            <h2>Write your answer and press enter to write again</h2>
                            <img src={Answer} alt="answer" />
                            <h2>You can skip a question, use a hint and pause the game at anytime</h2>
                            <img src={Tools} alt="tools" />
                            <h2>See if you can set up a highscore!</h2>
                        </div> : null}

                    {this.state.flCount === 3 ?
                        <div className="div3">
                            <h1>Good luck!</h1>
                        </div> : null}
                    <div className="dots-div">
                        <Link to="/fight-list"><button className="play-button">Play</button></Link>
                        <div>
                            {dots}
                        </div>
                    </div>
                </div>
        )
    }
}

export default FightListDiv;