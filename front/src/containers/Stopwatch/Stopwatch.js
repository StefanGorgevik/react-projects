import React from 'react'
import './Stopwatch.css'

class Stopwatch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0
        }
    }

    startStopwatch = () => {
        console.log('started')
        this.int = setInterval(() => {
            this.setState(prevState => ({
                seconds: prevState.seconds+1
            }))
        }, 1000)
    }
    stopStopwatch = () => {
        clearInterval(this.int)
     }
        

    render() {
        return (
            <div className="stopwatch-main-div">
                <h1>Stopwatch</h1>
                <div className="stopwatch-div">
                    <p>{this.state.hours}:</p>
                    <p>{this.state.minutes}:</p>
                    <p>{this.state.seconds}</p>
                </div>
                <button onClick={this.startStopwatch} className="start-stopwatch-btn">Start stopwatch</button>
                <button onClick={this.stopStopwatch} className="start-stopwatch-btn">Stop stopwatch</button>
            </div>
        )
    }
}

export default Stopwatch;