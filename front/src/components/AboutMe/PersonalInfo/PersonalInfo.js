import React from 'react'
import './PersonalInfo.css'
import '../shared.css'


function PersonalInfo(props) {
    const keys = ["Name", "Professional Headline", "Email", "Phone Number", "Location", "Age",]
    const values = ["Stefan Gorgevik", "Full stack web developer", "stefangorgevik@hotmail.com", "079-231-692", "Skopje, Macedonia", 25]
    const infoDivs = keys.map((key, i) => {
        return (
            <div key={key + i} className="info-div">
                <h3 className="key-h3">{key}</h3>
                <h2 className="value-h2">{values[i]}</h2>
            </div>
        )
    })
    return (
        <div className="personal-main-info-div">
            <h1 className="about-me-divs-title">Personal Info</h1>
            <div className="personal-info-div" >
                {infoDivs}
            </div>
        </div>
    )
}

export default PersonalInfo;