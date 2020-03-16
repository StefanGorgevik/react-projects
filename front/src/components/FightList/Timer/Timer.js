import React from 'react'
import './Timer.css'
class Timer extends React.Component {
    render() {
        return (
            <div>
                <p>Time Left: </p>
                    <p className="score-p">
                    {this.props.started ?
                        <span>
                            {this.props.timer}
                        </span> :  null}
                    </p>
            </div>
        )
    }

    componentDidMount() {
        this.props.startInterval()
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}

export default Timer;