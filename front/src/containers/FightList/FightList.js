import React from 'react'

import Question from '../../components/FightList/Question/Question'
import Input from '../../components/FightList/Input/Input'
import Timer from '../../components/FightList/Timer/Timer'
// import Answer from '../../components/FightList/Answer/Answer'
import GameOver from '../../components/FightList/GameOver/GameOver'
import store from '../../redux/store'
import { connect } from 'react-redux'
import { gameOver } from '../../redux/actions/actions'

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
                    answers: ['Ferrari', 'Golf', 'BMW', 'Audi', 'Ford', 'Renault', 'Masserati']
                }
            ],
            questions: [
                { id: 0, question: "Write all of the continents" },
                { id: 1, question: "Name fruits" },
                { id: 2, question: "Car brands" }

            ],
            correctAnswers: [],
            incorrectAnswers: [],
            count: 0,
            score: 0,
            timer: 10,
            gameOver: false,
            started: false
        }
    }


    componentDidUpdate() {
        console.log('comp did update')
        if (this.state.timer === 10 && this.state.count !== this.state.questions.length) {
            this.startInterval()
        }
        if (this.state.timer === 0) {
            this.clearInterval()
            if (this.state.count !== this.state.questions.length - 1) {
                console.log(this.state.count, this.state.questions.length - 1)
                this.startInterval()
                this.nextQuestion()

            } else if (this.state.count === this.state.questions.length - 1) {
                console.log(this.state.count, this.state.questions.length - 1)
                console.log("entered 2 if")
                store.dispatch(gameOver(true))
            }
        }
    }

    startGame = () => {
        this.setState({ started: true })
    }

    hideGameOverAlert = () => {
        store.dispatch(gameOver(false))
        this.clearInterval()
    }

    clearInterval = () => {
        clearInterval(this.myInterval)
        console.log("called")
    }

    startInterval = () => {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                timer: prevState.timer - 1
            }))
        }, 1000)
    }

    nextQuestion = () => {
        if (this.state.count !== this.state.questions.length) {
            this.clearInterval()
            this.setState({ count: this.state.count + 1, correctAnswers: [], incorrectAnswers: [], timer: 10 })
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
        var score = this.state.score
        var checkCorAns = corAnswers.filter(ans => {
            return (ans === this.state.inputValue)
        })
        var incorAnswers = this.state.incorrectAnswers
        var answers = this.state.answers
        console.log(answers)
        var answer = answers[this.state.count].answers.filter(ans => {
            return (ans === this.state.inputValue)
        })
        console.log(answer)

        if (answer.length !== 0 && checkCorAns.length === 0) {
            score++;
            console.log(answer)
            corAnswers.push(answer[0]);
            console.log(corAnswers)
            answers[this.state.count].answers.splice(answers[this.state.count].answers.indexOf(answer[0]), 1)

        }
        else if (answer.length === 0) {
            console.log("enterd2")
            incorAnswers.push(this.state.inputValue)
        }
        this.setState({
            ...this.state, answers: answers,
            ...this.state.correctAnswers, correctAnswers: corAnswers,
            ...this.state.incorrectAnswers, incorrectAnswers: incorAnswers,
            inputValue: '',
            score: score
        })
    }

    render() {
        if (this.state.correctAnswers.length !== 0) {
            var corAnswers = this.state.correctAnswers.map((answer, i) => {
                return (
                    <p className="correct" key={answer + i} >
                        {answer}
                    </p>
                )
            })
        }

        if (this.state.incorrectAnswers.length !== 0) {
            var incorAnswers = this.state.incorrectAnswers.map((answer, i) => {
                return (
                    <p className="incorrect" key={answer + i} >
                        {answer}
                    </p>
                )
            })
        }
        return (
            <div className="fight-list">
                {this.props.gameOver ? <GameOver hide={this.hideGameOverAlert} score={this.state.score} /> : null}
                <div>
                    <h1 className="title-h1">Fight list</h1>

                    <button className={this.state.started ? "disabled-start start-btn" : "start-btn"} onClick={this.startGame}>Start</button>
                    <div className="score-div" >
                        <div>
                            <p>Current Score: </p>
                            <p className="score-p">
                                <span>
                                    {this.state.score}
                                </span>
                            </p>
                        </div>
                        <Timer next={this.nextQuestion} timer={this.state.timer} startInterval={this.startInterval}
                            myInterval={this.myInterval} started={this.state.started}
                        />

                    </div>
                    <div className="question-div">
                        <Question count={this.state.count} questions={this.state.questions} />
                        <button className={this.state.started ? "next-button" : 'disabled-link next-button'} onClick={this.nextQuestion}><i className="fas fa-forward"></i></button>
                    </div>
                    <Input saveValue={this.handleInputValue} click={this.saveAnswer} value={this.state.inputValue} />
                    <div className="all-answers-div">
                        <div>
                            {corAnswers}
                        </div>
                        <div>
                            {incorAnswers}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameOver: state.gameOver
    }
}

export default connect(mapStateToProps)(FightList);