import React from 'react'

import Question from '../../components/FightList/Question/Question'
import Input from '../../components/FightList/Input/Input'
import Timer from '../../components/FightList/Timer/Timer'
// import Answer from '../../components/FightList/Answer/Answer'

import './FightList.css'

class FightList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            count: 0,
            answers: [
                {
                    id: 0,
                    answers: ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia']
                },
                {
                    id: 1,
                    answers: ['Apple', 'Banana', 'Pineapple', 'Cranberry', 'Raspberry', 'Kiwi', 'Peach', 'Pear', 'Lemon', 'Orange']
                }
            ],
            questions: [
                { id: 0, question: "Write all of the continents" },
                { id: 1, question: "Name fruits" }
            ],
            correctAnswers: [],
            incorrectAnswers: [],
            score: 0,
            timer: 10
        }
    }

    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(this.myInterval)
            this.nextQuestion()
            this.startInterval()
            if (this.state.count === this.state.answers.length-1)  {
                this.clearInterval()
            }
        }
        if(this.state.timer === 10) {
            this.startInterval()
        }
    }

    nextQuestion = () => {
        if (this.state.count !== this.state.questions.length - 1) {
            this.clearInterval()
            this.setState({ count: this.state.count + 1, correctAnswers: [], incorrectAnswers: [], timer: 10 })
        }
    }

    startInterval = () => {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                timer: prevState.timer - 1
            }))
        }, 1000)
    }

    clearInterval = () => {
        clearInterval(this.myInterval)
    }

    toTitleCase = (phrase) => {
        const str = phrase
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        return str
    };

    handleInputValue = (event) => {
        var val = this.toTitleCase(event.target.value)
        // val = val.substr(0, 1).toUpperCase() + val.substr(1)
        console.log(val)
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
                <div>
                    <h1 className="title-h1">Fight list</h1>
                    <div className="score-div" >
                        <div>
                            <p>Current Score: </p>
                            <h1 className="score-h1">{this.state.score}</h1>
                        </div>
                        <Timer next={this.nextQuestion} timer={this.state.timer} startInterval={this.startInterval}
                            myInterval={this.myInterval}
                        />
                    </div>
                    <div className="question-div">
                        <Question count={this.state.count} questions={this.state.questions} />
                        <button className="next-button" onClick={this.nextQuestion}><i className="fas fa-forward"></i></button>
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

export default FightList;