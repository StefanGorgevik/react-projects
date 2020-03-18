import React from 'react'

import Question from '../../components/FightList/Question/Question'
import Input from '../../components/FightList/Input/Input'
import Timer from '../../components/FightList/Timer/Timer'
import GameOver from '../../components/FightList/GameOver/GameOver'
import Score from '../../components/FightList/Score/Score'
import Answers from '../../components/FightList/Answers/Answers'
import QuestionsInfo from '../../components/FightList/QuestionsInfo/QuestionsInfo'
import './FightList.css'

import { connect } from 'react-redux'

class FightList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            answers: [],
            questions: [],
            correctAnswers: [],
            incorrectAnswers: [],
            currentAnswerLength: 0,
            count: 0,
            score: 0,
            timer: 0,
            gameOver: false,
            timerStarted: false,
            timerStopped: true,
            gamePaused: true,
            repeat: '',
            gameFinished: false,
            gameStatic: true,
            hintUsed: false
        }
    }

    startGame = () => {
        if (this.props.answers.length !== 0) {
            this.setState({
                answers: this.props.answers,
                questions: this.props.questions,
                timerStarted: true,
                timerStopped: false,
                timer: 30, count: 0, score: 0,
                gameOver: false,
                correctAnswers: [], incorrectAnswers: [],
                inputValue: '',
                gamePaused: false,
                gameFinished: false,
                currentAnswerLength: this.props.answers[0].answers.length,
                gameStatic: false
            })
            this.startInterval()
        }
    }

    hideGameOverAlert = () => {
        this.clearInterval()
        this.setState({
            gameOver: false,
            timerStopped: true, timerStarted: false,
            correctAnswers: [], incorrectAnswers: [],
            gameFinished: false
        })
        window.location.reload();
    }

    startInterval = () => {
        if (this.state.timerStopped && this.state.gamePaused) {
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
                    if (this.state.correctAnswers.length === this.state.currentAnswerLength && this.state.count !== this.state.questions.length - 1) {                       
                        this.nextQuestion()
                        this.setState({
                            timer: 30, correctAnswers: [], incorrectAnswers: []
                        })
                    }
                    if (this.state.correctAnswers.length === this.state.currentAnswerLength && this.state.count === this.state.questions.length - 1) {
                        this.setState({
                            gameFinished: true,
                            gameOver: true,
                            gameStatic: true,
                            timer: 0, correctAnswers: [],
                            incorrectAnswers: []
                        })
                        this.clearInterval()
                    }
                }
            }, 1000);
        }
    }

    clearInterval = () => {
        clearInterval(this.timer)
        if (!this.state.gamePaused) {
            this.setState({
                gamePaused: true,
                timerStopped: true,
                timerStarted: false
            })
        }

    }

    continueTimer = () => {
        if (this.state.gamePaused) {
            this.startInterval()
            this.setState({
                gamePaused: false,
                timerStopped: false,
                timerStarted: true
            })
        }
    }

    nextQuestion = () => {
        if (this.state.count !== this.state.questions.length - 1) {
            this.setState((prevState) => ({
                count: prevState.count + 1, timer: 30,
                correctAnswers: [], incorrectAnswers: [],
                inputValue: '',
                currentAnswerLength: this.state.answers[prevState.count + 1].answers.length,
                hintUsed: false
            }))
        }
        if (this.state.timer === 0 && this.state.count !== this.state.questions.length - 1) {
            this.setState((prevState) => ({
                count: prevState.count + 1, timer: 30,
                correctAnswers: [], incorrectAnswers: [],
                currentAnswerLength: this.state.answers[prevState.count + 1].answers.length,
                hintUsed: false
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

    useHint = () => {
        const corAnswers = this.state.correctAnswers
        const answers = this.state.answers
        const count =this.state.count
        const joker = answers[count].answers[Math.floor(Math.random() * answers[count].answers.length)]
        corAnswers.push(joker)
        answers[count].answers.splice(answers[count].answers.indexOf(joker), 1)
        this.setState({...this.state,
            hintUsed: true,
            ...this.state.correctAnswers, 
            correctAnswers: corAnswers,
            ...this.state.answers,
            answers: answers
        })
    }

    render() {
        return (
            <div className="fight-list">
                {this.state.gameOver || this.state.gameFinished ?
                    <GameOver hide={this.hideGameOverAlert}
                        score={this.state.score}
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
                            started={this.state.timerStarted}
                        />
                        <QuestionsInfo started={this.state.timerStarted}
                            curQuestion={this.state.count}
                        />
                    </div>
                    <div className="question-div">
                        <Question count={this.state.count}
                            questions={this.state.questions}
                            timerStarted={this.state.timerStarted}
                            corAns={this.state.correctAnswers}
                            answersLength={this.state.currentAnswerLength}
                        />
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
                        static={this.state.gameStatic}
                        useHint={this.useHint}
                        hintUsed={this.state.hintUsed}
                    />
                    <Answers
                        wordToBlink={this.state.repeat}
                        correctAnswers={this.state.correctAnswers}
                        incorrectAnswers={this.state.incorrectAnswers}
                        gamePaused={this.state.gamePaused}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions,
        answers: state.answers
    }
}

export default connect(mapStateToProps)(FightList);