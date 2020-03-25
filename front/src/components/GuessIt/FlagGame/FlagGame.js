import React from 'react'
import './FlagGame.css'
import Input from '../Input/Input'
import ImgDiv from '../ImgDiv/ImgDiv'

class FlagGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            flags: ["Macedonia", "Serbia", "France", "Sweden", "Pakistan", "Zimbabwe"],
            chosenFlag: '',
            loadedFlag: '',
            guessed: false,
            gameStarted: false,
            gameFinished: false,
            score: 0
        }
    }

    handleSubmitAnswer = (e) => {
        e.preventDefault()
        var flags = this.state.flags
        var guessedFlag = this.state.flags.filter(fl => {
            return (fl === this.state.inputValue)
        })
        if (guessedFlag.length !== 0) {
            flags.splice(flags.indexOf(guessedFlag[0]), 1)
            this.setState(prevState => ({
                guessed: true,
                inputValue: '',
                flags: flags,
                score: prevState.score+1
            }))
            this.getFlag()
        }
        if (guessedFlag.length === 0) {
            this.setState({
                inputValue: ''
            })
        }
        if (this.state.flags.length === 0) {
            this.setState({
                inputValue: '',
                gameFinished: true
            })
        }
    }

    handleInputValue = (event) => {
        var val = event.target.value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        this.setState({ inputValue: val })
    }

    getFlag = () => {
        if (this.state.flags.length !== 0) {
            var num = Math.floor(Math.random() * this.state.flags.length)
            var flag = this.state.flags[num]
            var src = require(`../../../assets/images/guess-it/Flags/${flag}.png`)
            this.setState({ gameStarted: true, chosenFlag: flag, loadedFlag: src })
        }
    }

    render() {
        return (
            <>
                <ImgDiv gameFinished={this.state.gameFinished}
                    gameStarted={this.state.gameStarted}
                    loadedImg={this.state.loadedFlag}
                    getImg={this.getFlag}
                />
                {this.state.gameStarted ?
                    <Input
                        saveValue={this.handleInputValue}
                        inputValue={this.state.inputValue}
                        handleSubmitAnswer={this.handleSubmitAnswer}
                    /> : null}
            </>
        )
    }
}

export default FlagGame;