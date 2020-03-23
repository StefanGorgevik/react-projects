import React from 'react'
import { Link } from 'react-router-dom'
import './DotsDiv.css'

function DotsDiv(props) {
    var dots = props.divs.map((div, i) => {
        return (
            <span onClick={() => props.dotClicked(i + 1)}
                key={i}
                className={props.flCount === i + 1 ? "dot active-dot" : "dot"}></span>
        )
    })

    return (
        <div className="dots-div">
        <Link to="/fight-list"><button className="play-button">Play</button></Link>
        <div>
            {dots}
        </div>
    </div>
    )
}
export default DotsDiv;