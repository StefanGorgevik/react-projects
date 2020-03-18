import React from 'react'
import './Timer.css'
function Timer (props) {
        return (
            <div className="timer-div">
                <p className="timer-label">Time Left</p>
                <p className="score-p">
                    {props.started ?
                        <span className={props.timer <= 5 ? "blinking" : ""}>
                            {props.timer}
                        </span> : null}
                </p>
            </div>
        )
    
}

export default Timer;