import React from 'react'
import './QuestionsInfo.css'

function QuestionsInfo(props) {
    return (
        <div className="questions-info-div">
            <p className="timer-label">Questions</p>
            <p className="questions-info-p">
                {props.started ?
                    <span>
                        <span >
                            {props.curQuestion+1}
                        </span> / <span>10</span>
                        </span> 
                        : null}
            </p>
        </div>
    )

}

export default QuestionsInfo;