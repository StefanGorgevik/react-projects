import React from 'react'
import './Input.css'

const Input = (props) => {
    return (
        <div className="input">
            <form onSubmit={props.click}>
                <label className="inputLabel"
                    htmlFor="answer">Answer: </label>
                <input className={props.timerStarted ? "answer" : "disabled-input answer"}
                    disabled={props.timerStarted ? "" : "disabled"}
                    autoComplete="off" onChange={props.saveValue}
                    type="text" id="answer" value={props.value}
                    ref={input => input && input.focus()}
                />
            </form>
            <button onClick={props.click}
                className={props.timerStarted ? "next-button" : 'disabled-link next-button'}>Enter
            </button>
            <button
                className={props.timerStarted || !props.count === props.questions.length - 1 ? "next-button" : 'disabled-link next-button'}
                onClick={props.nextQuestion}>
                <i className="fas fa-forward"></i>
            </button>
            <button
                className={ !props.hintUsed && props.timerStarted ? "next-button" : 'disabled-link next-button'}
                onClick={props.useHint}>
               Hint
            </button>
            {!props.static ?
                <button className="next-button"
                    onClick={props.gamePaused ? props.continue : props.pause}>{props.gamePaused ? "Start" : "Pause"}
                </button> : null}
        </div>
    )
}

export default Input;