import React from 'react'
import './GameOver.css'

function GameOver (props) {
        return (
            <div className="game-over-main-div">
            <div className="game-over-div">
                 <h1>{props.gameFinished ? "You got all answers!" : "Game over"}</h1>
                 <p>You have scored <span className="score-span">{props.score}</span> points</p>
                 <div>
                     <button className="game-over-btn" onClick={props.hide} >Close</button>
                 </div>
            </div>
            </div>
        )
    }

export default GameOver;