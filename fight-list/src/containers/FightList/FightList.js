import React from 'react'

import Question from '../../components/Question/Question'
import Input from '../../components/Input/Input'
import Answer from '../../components/Answers/Answer/Answer'

import Header from '../../components/Navigation/Header'
import './FightList.css'

class FightList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            answers: [],
            continents: ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia']
        }
    }

    handleInputValue = (event) => {
        this.setState({ inputValue: event.target.value })
    }

    saveAnswer = (event) => {
        event.preventDefault()
        const answers = this.state.answers
        answers.push(this.state.inputValue.toLowerCase());
        this.setState({ answers: answers})
    }

    render() {
        if (this.state.answers) {
            var answers = this.state.answers.map((answer, i) => {
                return (
                    <Answer key={answer + i} answer={answer} continents={this.state.continents} />
                )
            })
        }
        return (
            <div className="fight-list">
                <Header />
                <div>
                    <h1>Fight list</h1>
                    <Question />
                    <Input saveValue={this.handleInputValue} click={this.saveAnswer} value={this.state.inputValue} />
                    {answers}
                </div>
            </div>
        )
    }
}

export default FightList;