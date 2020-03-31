 import React from 'react'
import './GamesDiv.css'
import firstImage from '../../../assets/images/fight-list/fight-list-img-1.jpg'
import DotsDiv from '../DotsDiv/DotsDiv'

class GamesDiv extends React.Component {
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
        
        return (
            <div className={`games-div games-div-${this.state.flCount}`}>
                <h1 className="games-title-h1">Games</h1>
                    {this.state.flCount === 1 ?
                        <div className="div1">
                            <h1>Fight list</h1>
                            <h1>Are you ready for the challenge?</h1>
                            <img src={firstImage} alt="first-img" />
                            <h2>You get 30 seconds</h2>
                            <h2>You get 10 questions</h2>
                            <h2>Give as many answers as you can!</h2>
                        </div> : null}
                    {this.state.flCount === 2 ?
                        <div className="div2">
                            <h1>Memory game</h1>
                            <p>See if you can find every band logo behind the cards</p>
                        </div> : null}

                    {this.state.flCount === 3 ?
                        <div className="div3">
                            <h1>Guess it!</h1>
                            <p>Given limited time, can you guess the name of every images shown?</p>
                            <h4>Go ahead and challenge yourself</h4>
                        </div> : null}
                        <DotsDiv divs={this.state.divs} dotClicked={this.dotClicked} flCount={this.state.flCount} />
                </div>
        )
    }
}

export default GamesDiv;