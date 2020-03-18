import React from 'react'

import Question from '../../components/FightList/Question/Question'
import Input from '../../components/FightList/Input/Input'
import Timer from '../../components/FightList/Timer/Timer'
import GameOver from '../../components/FightList/GameOver/GameOver'
import Score from '../../components/FightList/Score/Score'
import Answers from '../../components/FightList/Answers/Answers'
import './FightList.css'

class FightList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            answers: [
                {
                    id: 0,
                    answers: ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia']
                },
                {
                    id: 1,
                    answers: ['Apple', 'Banana', 'Pineapple', 'Cranberry', 'Raspberry', 'Kiwi', 'Peach', 'Pear', 'Lemon', 'Orange']
                },
                {
                    id: 2,
                    answers: ['Ferrari', 'Golf', 'Bmw', 'Audi', 'Ford', 'Renault', 'Masserati']
                },
                {
                    id: 3,
                    answers: ['Samsung', 'Iphone', 'Huawei']
                },
                {
                    id: 4,
                    answers: ['Fender']
                }
            ],
            questions: [
                { id: 0, question: "Write all of the continents" },
                { id: 1, question: "Name fruits" },
                { id: 2, question: "Car brands" },
                { id: 3, question: "Mobile phones brands" },
                { id: 4, question: "Guitars" }

            ],
            correctAnswers: [],
            incorrectAnswers: [],
            currentQueLength: 0,
            count: 0,
            score: 0,
            timer: 0,
            gameOver: false,
            timerStarted: false,
            timerStopped: true,
            gamePaused: true,
            repeat: '',
            gameFinished: false
        }
    }

    startGame = () => {
        this.setState({
            timerStarted: true,
            timerStopped: false,
            timer: 30, count: 0, score: 0,
            gameOver: false,
            correctAnswers: [], incorrectAnswers: [],
            inputValue: '',
            gamePaused: false,
            currentQueLength: this.state.answers[this.state.count].answers.length,
            gameFinished: false
        })
        this.startInterval()
    }

    hideGameOverAlert = () => {
        this.setState({ gameOver: false, timerStopped: true, timerStarted: false, correctAnswers: [], incorrectAnswers: [], gameFinished: false})
        clearInterval(this.timer)
    }

    startInterval = () => {
        if (this.state.timerStopped && this.state.gamePaused) {
            console.log("entereeed")
            this.timer = setInterval(() => {
                this.setState({ timerStarted: true, timerStopped: false, gamePaused: false })
                if (this.state.timerStarted) {
                    if (this.state.timer > 0) {
                        this.setState((prevState) => ({ timer: prevState.timer - 1 }))
                    }
                    if (this.state.timer === 0 && this.state.count !== this.state.questions.length - 1) {
                        this.nextQuestion()
                    }
                    if (this.state.timer === 0 && this.state.count === this.state.questions.length - 1) {
                        this.setState({ timerStarted: false, timerStopped: true, gameOver: true, gamePaused: true, timer: 0 })
                        this.clearInterval()
                    }
                    if (this.state.gameOver) {
                        this.clearInterval()
                    }
                    if (this.state.correctAnswers.length === this.state.currentQueLength && this.state.count === this.state.questions.length - 1) {
                        console.log('enter in the if')
                        this.setState({ gameFinished: true, gameOver:true, timerStopped: true, gamePaused: true, timer: 0, timerStarted: false })
                        this.clearInterval()
                    }
                }
            }, 1000);
        }
    }

    clearInterval = () => {
        console.log('called cleared')
        clearInterval(this.timer)
        if (!this.state.gamePaused) {
            console.log("1")
            this.setState({ gamePaused: true, timerStopped: true, timerStarted: false })
        }
    }

    continueTimer = () => {
        if (this.state.gamePaused) {
            this.startInterval()
            this.setState({ gamePaused: false, timerStopped: false, timerStarted: true })
        }
    }

    nextQuestion = () => {
        if (this.state.count !== this.state.questions.length - 1) {
            this.setState((prevState) => ({
                count: prevState.count + 1, timer: 30,
                correctAnswers: [], incorrectAnswers: [],
                inputValue: '',
                currentQueLength: this.state.answers[this.state.count].answers.length
            }))
        }
        if (this.state.timer === 0 && this.state.count !== this.state.questions.length - 1) {
            this.setState((prevState) => ({
                count: prevState.count + 1, timer: 30,
                correctAnswers: [], incorrectAnswers: [],
                currentQueLength: this.state.answers[this.state.count].answers.length
            }))
        }
    }

    toTitleCase = (phrase) => {
        const str = phrase.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        return str
    };

    handleInputValue = (event) => {
        var val = this.toTitleCase(event.target.value)
        this.setState({ inputValue: val })
    }

    saveAnswer = (event) => {
        event.preventDefault()
        var corAnswers = this.state.correctAnswers
        var incorAnswers = this.state.incorrectAnswers
        var answers = this.state.answers
        var score = this.state.score
        var checkCorAns = corAnswers.filter(ans => {
            return (ans === this.state.inputValue)
        })
        if (checkCorAns.length === 0) {
            var answer = answers[this.state.count].answers.filter(ans => {
                return (ans === this.state.inputValue)
            })

            if (answer.length !== 0) {
                score++;
                corAnswers.push(answer[0])
                answers[this.state.count].answers.splice(answers[this.state.count].answers.indexOf(answer[0]), 1)
                this.setState({
                    ...this.state, answers: answers,
                    ...this.state.correctAnswers, correctAnswers: corAnswers,
                    inputValue: '',
                    score: score,
                    repeat: ''
                })
                if (corAnswers.length === this.state.currentQueLength) {
                    this.nextQuestion()
                }
            }
            if (answer.length === 0) {
                incorAnswers.push(this.state.inputValue)
                this.setState({
                    ...this.state.incorrectAnswers, incorrectAnswers: incorAnswers,
                    inputValue: ''
                })
            }
        } else if (checkCorAns.length === 1) {
            this.setState({
                repeat: this.state.inputValue,
                inputValue: ''
            })
            setTimeout(() => {
                this.setState({
                    repeat: ''
                })
            }, 400)
        }
    }

    render() {
        return (
            <div className="fight-list">
                {this.state.gameOver || this.state.gameFinished ?
                    <GameOver hide={this.hideGameOverAlert}
                        score={this.state.score}
                        play={this.startGame}
                        gameFinished={this.state.gameFinished}
                    /> : null}
                <div>
                    <h1 className="title-h1">Fight list</h1>
                    <button className={this.state.timerStarted ? "disabled-start start-btn" : "start-btn"}
                        onClick={this.startGame}>
                        Let's do this</button>
                    <div className="score-time-div" >
                        <Score timerStarted={this.state.timerStarted}
                            score={this.state.score} />
                        <Timer next={this.nextQuestion}
                            timer={this.state.timer}
                            started={this.state.timerStarted} />
                    </div>
                    <div className="question-div">
                        <Question count={this.state.count}
                            questions={this.state.questions}
                            timerStarted={this.state.timerStarted} />
                    </div>
                    <Input
                        saveValue={this.handleInputValue}
                        click={this.saveAnswer}
                        value={this.state.inputValue}
                        timerStarted={this.state.timerStarted}
                        nextQuestion={this.nextQuestion}
                        pause={this.clearInterval}
                        gamePaused={this.state.gamePaused}
                        continue={this.continueTimer}
                        timerStopped={this.timerStopped}
                        questions={this.state.questions} count={this.state.count}
                    />
                    <Answers
                        wordToBlink={this.state.repeat}
                        correctAnswers={this.state.correctAnswers}
                        incorrectAnswers={this.state.incorrectAnswers}

                    />
                </div>
            </div>
        )
    }
}

export default FightList;