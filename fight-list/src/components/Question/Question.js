import React from 'react'
import './Question.css'

class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="question">
                <p>
                    Write all of the continents
                </p>
            </div>
        )
    }
}

export default Question;