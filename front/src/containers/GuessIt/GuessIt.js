import React from 'react'
import './GuessIt.css'
import France from '../../assets/images/guess-it/fr.png'
import Macedonia from '../../assets/images/guess-it/mk.png'
import Serbia from '../../assets/images/guess-it/rs.png'
import Sweden from '../../assets/images/guess-it/se.png'
// import axios from 'axios'

class GuessIt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            flags: [Macedonia, Serbia, France, Sweden],
            flag: '',
            num: Math.floor(Math.random() * 3),
            guessed: false
        }
    }

    handleSubmitAnswer = () => {
        console.log('e')
        console.log(this.state.flags[2])
        console.log(this.state.num)
        console.log(this.state.flags[this.state.num])
        var s = this.state.flags[this.state.num].replace('/static/media/', '')
        s = s.substring(0, s.indexOf('.'));
        s = s.charAt(0).toUpperCase() + s.substring(1)
        console.log(s)
        console.log(this.state.num)
        console.log(this.state.flags[2])
        if (this.state.inputValue === this.state.flags[this.state.num]) {
            console.log("yes")
        }
        if (this.state.inputValue === s) {
            console.log("yes")
            this.setState({ guessed: true, num: Math.floor(Math.random() * 3) })
        }
    }

    handleInputValue = (event) => {
        var val = event.target.value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        this.setState({ inputValue: val })
    }

    render() {

        return (
            <div className="guess-it-main">
                <h1 className="guess-it-title">Guess it</h1>
                <div className="guess-it-div">
                    <img src={this.state.flags[this.state.num]} alt="france" />
                </div>
                <div className="guess-it-input-div">
                    <label htmlFor="country-input">Name the country</label>
                    <input type="text" id="country-input"
                        onChange={this.handleInputValue}
                        defaultValue={this.state.inputValue}
                        ref={input => input && input.focus()}
                    />
                    <button onClick={this.handleSubmitAnswer} className="guess-it-btn">Enter</button>
                    {this.state.guessed ? <h1>You got it</h1> : null}
                </div>
            </div>
        )
    }
}

export default GuessIt;