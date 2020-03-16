import React from 'react'
import './GameOver.css'

class GameOver extends React.Component {
    constructor(props) {
        super(props)
        this.state= {}
    }
    render() {
        return (
            <div className="game-over-main-div">
            <div className="game-over-div">
                 <h1>Game over</h1>
                 <p>You have scored <span className="score-span">{this.props.score}</span> points</p>
                 <div>
                     <button className="game-over-btns" onClick={this.props.hide} >Close</button>
                     <button className="game-over-btns">Play again</button>
                 </div>
            </div>
            </div>
        )
    }
}

export default GameOver;