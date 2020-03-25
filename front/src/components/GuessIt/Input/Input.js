import React from 'react'
import './Input.css'

function Input(props) {
    return (
        <div className="guess-it-input-div">
            <form onSubmit={props.handleSubmitAnswer}>
                <label htmlFor="country-input">Name the country</label>
                <input type="text" id="country-input"
                    onChange={props.saveValue}
                    value={props.inputValue}
                    ref={input => input && input.focus()}
                />
                <button onClick={props.handleSubmitAnswer} className="guess-it-btn">Enter</button>
            </form>
        </div>
    )
}

export default Input