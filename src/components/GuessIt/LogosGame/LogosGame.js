import React from 'react'
import './LogosGame.css'
import Input from '../Input/Input'
import ImgDiv from '../ImgDiv/ImgDiv'


class LogosGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            logos: ["Adidas", "Nike", "Mercedes", "Audi" ],
            chosenLogo: '',
            gameStarted: false,
            gameFinished: false
        }
    }

    handleSubmitAnswer = (e) => {
        e.preventDefault()
        var logos = this.state.logos
        var guessedLogo = this.state.logos.filter(logo => {
            return (logo === this.state.inputValue)
        })
        if (guessedLogo.length !== 0) {
            logos.splice(logos.indexOf(guessedLogo[0]), 1)
            this.setState({
                inputValue: '',
                answeredFlag: '',
                logos: logos
            })
            this.getFlag()
        }
        if(guessedLogo.length === 0) {
            this.setState({
                inputValue: '',
            })
        }
        if( this.state.logos.length === 0) {
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

    getLogo = () => {
        if(this.state.logos.length !== 0) {
        var num = Math.floor(Math.random() * this.state.logos.length)
        var logo = this.state.logos[num]
        var src = require(`../../../assets/images/guess-it/Logos/${logo}.jpg`)
        this.setState({ gameStarted: true, chosenLogo: logo, loadedLogo: src })
    }
    }

    render() {
        return (
            <>
                <ImgDiv gameFinished={this.state.gameFinished}
                    gameStarted={this.state.gameStarted}
                    loadedImg={this.state.loadedLogo}
                    getImg={this.getLogo}/>
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

export default LogosGame;