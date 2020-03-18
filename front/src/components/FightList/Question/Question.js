import React from 'react'
import './Question.css'

function Question(props) {
        return (
            <div className="question">
            {props.timerStarted ? 
                <p>
                    {props.count !== props.questions.length ? props.questions[props.count].question : null}
                </p> : null}
            </div>
        )
}

export default Question;