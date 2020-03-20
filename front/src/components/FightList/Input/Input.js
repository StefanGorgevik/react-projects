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
            <div>
                <button onClick={props.click}
                    className={props.timerStarted ? "next-button" : 'disabled-link next-button'}>Enter
            </button>
                {
                    props.infoCount === 0 ?
                        props.timerStarted || props.infoPopped ? null : <p className="starter-info">
                            <span className="info-span">
                                <i className="fas fa-arrow-up"></i>
                            </span>
                    Press enter to check if your answer is correct
                    </p>
                        : null}
            </div>
            <div>
                <button
                    onKeyDown={props.handleKeyPress}
                    className={props.timerStarted || !props.count === props.questions.length - 1 ? "next-button" : 'disabled-link next-button'}
                    onClick={props.nextQuestion}>
                    <i className="fas fa-forward"></i>
                </button>
                {props.infoCount === 1 ?
                    props.timerStarted || props.infoPopped ? null : <p className="starter-info">
                        <span className="info-span"><i className="fas fa-arrow-up"></i>
                        </span>Press to skip question</p>
                    : null}


            </div>

            <div>
                <button
                    className={!props.hintUsed && props.timerStarted ? "next-button" : 'disabled-link next-button'}
                    onClick={props.useHint}>
                    Hint
            </button>
                {props.infoCount === 2 ?
                    props.timerStarted || props.infoPopped ? null :
                        <p className="starter-info">
                            <span className="info-span">
                            <i className="fas fa-arrow-up"></i>
                            </span>Press to use a hint</p>
                    : null}
            </div>


            {
                !props.static ?
                    <button className="next-button"
                        onClick={props.gamePaused ? props.continue : props.pause}>{props.gamePaused ? "Start" : "Pause"}
                    </button> : null
            }
        </div >
    )
}

export default Input;