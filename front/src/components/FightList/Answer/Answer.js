import React from 'react'
import './Answer.css'

const Answer = (props) => {
    const answer = props.continents.filter(cont => {
        return (cont === props.answer)
    })
    return (
        <div className="answer">
                <p className={answer.length === 0 ? 'incorrect' : 'correct'}>{answer.length === 0 ? props.answer : answer}</p>
        </div>
    )
}

export default Answer;