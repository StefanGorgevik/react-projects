import React from 'react'
import './MemoryCard.css'
import Aurelia from "./img/aurelia.svg"
import BackFace from './img/js-badge.svg'

class MemoryCard extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                isFlipped: false
            }
    }

    handleClickFlip = () => {
        this.setState(prevState => ({
            isFlipped: !prevState.isFlipped
        }))
    }

    render() {
        return (
            <div className="memory-card-main-div">
                <h1 className="memory-card-title">Memory Card</h1>
                <section class="memory-game">
                    <div>
                        <div className="memory-card" onClick={this.handleClickFlip} data-framework="aurelia">
                            {this.state.isFlipped ? 
                            <img className="front-face" src={Aurelia} alt="Aurelia" /> :
                            <img className="back-face" src={BackFace} alt="JS Badge" />}
                        </div>
                        <div className="memory-card" data-framework="aurelia">
                            <img className="front-face" src="./img/aurelia.svg" alt="Aurelia" />
                            <img className="back-face" src={BackFace} alt="JS Badge" />
                        </div>
                        <div className="memory-card" data-framework="vue">
                            <img className="front-face" src="./img/vue.svg" alt="Vue" />
                            <img className="back-face" src={BackFace} alt="JS Badge" />
                        </div>
                        <div className="memory-card" data-framework="vue">
                            <img className="front-face" src="./img/vue.svg" alt="Vue" />
                            <img className="back-face" src={BackFace} alt="JS Badge" />
                        </div>
                    </div>

                    <div>
                        <div className="memory-card" data-framework="angular">
                            <img className="front-face" src="./img/angular.svg" alt="Angular" />
                            <img className="back-face" src={BackFace} alt="JS Badge" />
                        </div>
                        <div className="memory-card" data-framework="angular">
                            <img className="front-face" src="./img/angular.svg" alt="Angular" />
                            <img className="back-face" src={BackFace} alt="JS Badge" />
                        </div>
                        <div className="memory-card" data-framework="ember">
                            <img className="front-face" src="./img/ember.svg" alt="Ember" />
                            <img className="back-face" src={BackFace} alt="JS Badge" />
                        </div>
                        <div className="memory-card" data-framework="ember">
                            <img className="front-face" src="./img/ember.svg" alt="Ember" />
                            <img className="back-face" src={BackFace} alt="JS Badge" />
                        </div>
                    </div>

                    <div>
                        <div className="memory-card" data-framework="backbone">
                            <img className="front-face" src="./img/backbone.svg" alt="Backbone" />
                            <img className="back-face" src={BackFace} alt="JS Badge" />
                        </div>
                        <div className="memory-card" data-framework="backbone">
                            <img className="front-face" src="./img/backbone.svg" alt="Backbone" />
                            <img className="back-face" src={BackFace} alt="JS Badge" />
                        </div>
                        <div class="memory-card" data-framework="react">
                            <img class="front-face" src="img/react.svg" alt="React" />
                            <img class="back-face" src={BackFace} alt="JS Badge" />
                        </div>
                        <div class="memory-card" data-framework="react">
                            <img class="front-face" src="img/react.svg" alt="React" />
                            <img class="back-face" src={BackFace} alt="JS Badge" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default MemoryCard;