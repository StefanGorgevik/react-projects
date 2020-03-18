import React from 'react'

import './Answers.css'

function Answers(props) {
    if (props.correctAnswers.length !== 0) {
        var corAnswers = props.correctAnswers.map((answer, i) => {
            return (
                <p className={props.wordToBlink === answer ? "answers correct blink-word" : "answers correct"} key={answer + i} >
                    {answer}
                </p>
            )
        })
    }

    if (props.incorrectAnswers.length !== 0) {
        var incorAnswers = props.incorrectAnswers.map((answer, i) => {
            return (
                <p className="answers incorrect" key={answer + i} >
                    {answer}
                </p>
            )
        })
    }
    return (
        <div>
            {!props.gamePaused ?
                <div className="all-answers-div">

                    <div className="cor-answers-div">
                        {corAnswers}
                    </div>
                    <div className="incor-answers-div">
                        {incorAnswers}
                    </div>
                </div> : null}
        </div>
    )
}

export default Answers;