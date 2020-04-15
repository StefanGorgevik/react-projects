import React from 'react'
import './Stopwatch.css'

class Stopwatch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            timerStarted: false,
            splits: []
        }
    }

    startStopwatch = () => {
        console.log('started')
        if (!this.state.timerStarted) {
            this.setState({ timerStarted: true })
            this.int = setInterval(() => {
                this.setState(prevState => ({
                    seconds: prevState.seconds + 1
                }))
                if (this.state.seconds === 60) {
                    this.setState(prevState => ({
                        minutes: prevState.minutes + 1,
                        seconds: 0
                    }))
                }
                if (this.state.minutes === 60) {
                    this.setState(prevState => ({
                        hours: prevState.hours + 1,
                        minutes: 0,
                        seconds: 0
                    }))
                }
            }, 1000)
        }
    }
    stopStopwatch = () => {
        this.setState({ timerStarted: false })
        clearInterval(this.int)
    }
    resetStopwatch = () => {
        this.setState({ timerStarted: false, seconds: 0, minutes: 0, hours: 0, splits: [] })
        clearInterval(this.int)
    }

    saveTime = () => {
        const spl = this.state.splits
        const split = this.state.hours + ':' + this.state.minutes + ':' + this.state.seconds
        console.log(split)
        spl.push(split)
        this.setState({
            splits: spl
        })
    }
    componentWillUnmount() {
        this.resetStopwatch()
    }
    render() {
        if (this.state.splits.length !== 0) {
            var allSplits = this.state.splits.map((spl, i) => {
                return (
                    <li key={spl + i} className="splits-li">
                        <span className="splits-span">{i + 1 + ":   "}</span>
                        {spl}
                    </li>
                )
            })
        }
        return (
            <div className="stopwatch-main-div">
                <h1>Stopwatch</h1>
                <div className="stopwatch-div">
                    <p>{this.state.hours}:</p>
                    <p>{this.state.minutes}:</p>
                    <p>{this.state.seconds}</p>
                </div>
                <div className="buttons-stopwatch-div">
                    <button onClick={this.startStopwatch} className="stopwatch-btn">Start stopwatch</button>
                    <button onClick={this.stopStopwatch} className="stopwatch-btn">Pause stopwatch</button>
                    <button onClick={this.resetStopwatch} className="stopwatch-btn">Reset stopwatch</button>
                    <button onClick={this.saveTime} className="stopwatch-btn">Split</button>
                </div>
                {this.state.splits.length !== 0 ?
                <div className="splits-div">
                        <h3>Splits</h3>
                        <ul className="splits-ul">
                            {allSplits}
                        </ul>
                    </div>
                    : null}
            </div>
        )
    }
}

export default Stopwatch;