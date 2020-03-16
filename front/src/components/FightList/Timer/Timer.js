import React from 'react'

class Timer extends React.Component {
    render() {
        return (
            <div>
                <p>Time Left: </p>
                <h1 className="score-h1">{this.props.timer}</h1>
            </div>
        )
    }

    componentDidMount() {
        this.myInterval = this.props.startInterval()
           
    }
    
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}

export default Timer;