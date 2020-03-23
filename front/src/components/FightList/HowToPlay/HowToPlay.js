import React from 'react'
import './HowToPlay.css'

function HowToPlay(props) {
    return (
        <div className="how-to-play-container">
            <div className="how-to-play">
                <h1>
                    <span className="info-h1-icon"><i className="fas fa-info-circle"></i>
                    </span> Info
         </h1>
                <p>
                    The point of the game is to answer as many answers to the random questions that are prompted.
            </p>
                <p>
                    Write the answers correctly and press Enter to check if it is correct or not.
            </p>
                <p>
                    You can use one hint per question and you can skip a question at anytime you want
            </p>
                <p>
                    You have 30 seconds for each question!
            </p>
                <h3>
                    Good luck and have fun!
            </h3>
                <button className="close-info-btn" onClick={props.closeInfo}>Close</button>
            </div>
        </div>

    )
}

export default HowToPlay;