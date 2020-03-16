import React from 'react'
import './Input.css'

const Input = (props) => {
    return (
        <div className="input">
        <form onSubmit={props.click}>
            <label htmlFor="answer">Answer: </label>
            <input onChange={props.saveValue} type="text" id="answer" value={props.value} />
        </form>
            <button onClick={props.click}>Enter</button>
        </div>
    )
}

export default Input;