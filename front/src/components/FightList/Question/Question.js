import React from 'react'
import './Question.css'

function Question(props) {
        return (
            <div className="question">
                <p>
                    {props.questions[props.count].question}
                </p>
            </div>
        )
}

export default Question;