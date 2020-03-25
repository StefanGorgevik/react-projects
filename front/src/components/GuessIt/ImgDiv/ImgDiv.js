import React from 'react'
import './ImgDiv.css'


function ImgDiv(props) {
    return (
        <div className="img-div">
                {props.gameFinished ? <h1>Finished</h1>: null}
                    {props.gameStarted ?
                        <img src={props.loadedImg} alt="loadedImg" /> : 
                        <button onClick={props.getImg} className="img-start-btn">Start</button> }
                    {props.gameStarted ? 
                        <button className="pass-button">Pass</button> :null}
                </div>
    )
}

export default ImgDiv;