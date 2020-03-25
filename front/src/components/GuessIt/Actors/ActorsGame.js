import React from 'react'
import './ActorsGame.css'
import Input from '../Input/Input'
import ImgDiv from '../ImgDiv/ImgDiv'


class ActorsGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            actors: ["Liam Neeson", "Marilyn Monroe", "Christopher Reeve", "Drew Barrymore" ],
            chosenActor: '',
            loadedActor: '',
            gameStarted: false,
            gameFinished: false
        }
    }

    handleSubmitAnswer = (e) => {
        e.preventDefault()
        var actors = this.state.actors
        var guessedActor = this.state.actors.filter(actor => {
            return (actor === this.state.inputValue)
        })
        if (guessedActor.length !== 0) {
            actors.splice(actors.indexOf(guessedActor[0]), 1)
            this.setState({
                inputValue: '',
                actors: actors
            })
            this.getActor()
        }
        if(guessedActor.length === 0) {
            this.setState({
                inputValue: ''
            })
        }
        if( this.state.actors.length === 0) {
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

    getActor = () => {
        if(this.state.actors.length !== 0) {
        var num = Math.floor(Math.random() * this.state.actors.length)
        var actor = this.state.actors[num]
        var src = require(`../../../assets/images/guess-it/Actors/${actor}.jpg`)
        this.setState({ gameStarted: true, chosenActor: actor, loadedActor: src })
    }
    }

    render() {
        return (
            <>
                <ImgDiv gameFinished={this.state.gameFinished}
                    gameStarted={this.state.gameStarted}
                    loadedImg={this.state.loadedActor}
                    getImg={this.getActor}/>
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

export default ActorsGame;