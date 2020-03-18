import React from 'react'
import './Score.css'

function Score(props) {
    return(
        <div className="score-div">
        <p className="score-label">Current Score</p>
        <p className="score-p">
        {props.timerStarted ? 
            <span>
                {props.score}
            </span> : null}
        </p>
    </div>
    )
}

export default Score;