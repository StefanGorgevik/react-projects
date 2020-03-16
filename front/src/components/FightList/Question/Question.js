import React from 'react'
import './Question.css'

function Question(props) {
        return (
            <div className="question">
                <p>
                    {props.count !== props.questions.length ? props.questions[props.count].question : null}
                </p>
            </div>
        )
}

export default Question;