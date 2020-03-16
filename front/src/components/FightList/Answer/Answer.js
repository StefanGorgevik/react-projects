import React from 'react'
import './Answer.css'

const Answer = (props) => {
    const answer = props.continents.filter(cont => {
        return (cont === props.answer)
    })
    return (
        <div className="answer">
            <div className="correct">
                {answer}
            </div>
            <div className="incorrect">

            </div>
        </div>
    )
}

export default Answer;