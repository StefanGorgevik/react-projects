import React from 'react'
import './Question.css'

function Question(props) {
    return (
        <div className="question">
            {props.timerStarted ?
                <div className="remaining-ans">
                    <span>{props.corAns.length}</span> / <span>{props.answersLength}</span>
                </div> : null}

            {props.timerStarted ?
                <p>
                    {props.count !== props.questions.length ? props.questions[props.count].question : null}
                </p> : null}
        </div>
    )
}

export default Question;