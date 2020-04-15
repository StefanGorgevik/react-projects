import React from 'react'
import './GuessIt.css'
import FlagGame from '../../components/GuessIt/FlagGame/FlagGame'
import LogosGame from '../../components/GuessIt/LogosGame/LogosGame'
import ActorsGame from '../../components/GuessIt/Actors/ActorsGame'
import Timer from '../../components/FightList/Timer/Timer'
import Score from '../../components/FightList/Score/Score'

class GuessIt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: ["Flags", "Actors", "Logos"],
            categoryPicked: false,
            category: ''
        }
    }

    pickCategory = (cat) => {
        this.setState({ category: cat, categoryPicked: true })
    }

    goBackHandler = () => {
        this.setState({ categoryPicked: false })
    }

    renderSwitch() {
        switch (this.state.category) {
            case 'Flags':
                return <FlagGame />;
            case 'Actors':
                return <ActorsGame />;
            case 'Logos':
                return <LogosGame />;
            default:
                return null;
        }
    }

    render() {
        const cat = this.state.categories.map((cat, i) => {
            return (
                <div key={cat + i} className="category-div" onClick={() => this.pickCategory(cat)}>
                    {cat}
                </div>
            )
        })
        return (
            <div className="guess-it-main">
                <div className="guess-it-title-div">
                    {this.state.categoryPicked ?
                        <button
                            onClick={this.goBackHandler}
                            className="guess-it-go-back-btn">Go back</button> : null}
                    <h1 className="guess-it-title">Guess it</h1>
                </div>
                {this.state.categoryPicked ?
                    <div className="guess-it-score">
                        <Timer />
                        <Score />
                    </div> : null}
                {this.state.categoryPicked ? null :
                    <div>
                        <h2>Choose a category</h2>
                        <div className="categories-div">
                            {cat}
                        </div>
                    </div>}
                {this.state.categoryPicked ? this.renderSwitch() : null}
            </div>
        )
    }
}

export default GuessIt;