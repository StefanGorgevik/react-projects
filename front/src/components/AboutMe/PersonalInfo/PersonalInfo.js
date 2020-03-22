import React from 'react'
import './PersonalInfo.css'

function PersonalInfo(props) {
    const keys = ["Professional Headline", "Email", "Location", "Age",]
    const values = ["Full stack web developer", "stefangorgevik@hotmail.com", "Skopje, Macedonia", 25]
    const infoDivs = keys.map((key, i) => {
        return (
            <div className="info-div">
                <p className="key-p">{key}</p>
                <p className="value-p">{values[i]}</p>
            </div>
        )
    })
    return (
        <div className="personal-info-div">
            <h1 className="personal-info-div-h1 ">Personal Info</h1>

            {infoDivs}

        </div>
    )
}

export default PersonalInfo;