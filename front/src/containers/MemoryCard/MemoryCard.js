import React from 'react'
import './MemoryCard.css'
import Pearljam from "../../assets/images/memory-card/pearljam.jpg"
import Metallica from "../../assets/images/memory-card/metallica2.jpg"
import Acdc from "../../assets/images/memory-card/acdc.jpg"
import Pinkfloyd from "../../assets/images/memory-card/pink-floyd.jfif"
import Nirvana from "../../assets/images/memory-card/nirvana.jpg"
import Ironmaiden from "../../assets/images/memory-card/iron-maiden.jpg"
import BackFace from '../../assets/images/memory-card/back-face.jpg'

class MemoryCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            card1Flipped: false,
            card2Flipped: false,
            photos: [Pearljam, Metallica, Acdc, Pinkfloyd, Nirvana, Pinkfloyd, Ironmaiden, Acdc, Ironmaiden, Nirvana, Pearljam, Metallica],
            card1: '',
            card2: '',
            clickedCount: 0
        }
    }

    handleClickFlip = (e) => {
        console.log(e.currentTarget.dataset.id)
        this.setState({ card1: this.state.photos[e.currentTarget.dataset.id], card1Flipped: true })
        // var s = card.replace('/static/media/', '')
        // s = s.substring(0, s.indexOf('.'));
        // s = s.charAt(0).toUpperCase() + s.substring(1)
        // console.log(s, i)

        // if (this.state.clickedCount === 0) {
        //     console.log('entered1')
        //     this.setState({ card1: s, card1Flipped: true, clickedCount: this.state.clickedCount + 1 })
        // }
        // if (this.state.clickedCount === 1) {
        //     console.log('entered2')

        //     this.setState({ card2: s, card2Flipped: true, clickedCount: this.state.clickedCount + 1 })
        //     setTimeout(() => {
        //         this.setState({
        //             clickedCount: 0,
        //             card1: '',
        //             card2: '',
        //             card1Flipped: false,
        //             card2Flipped: false
        //         })
        //     }, 3000)
        // }

    }

    render() {
        var cards = this.state.photos.map((card, i) => {
            return (
                <div key={card + i} className="memory-card col" data-id={i} onClick={this.handleClickFlip} >
                {!this.state.card1Flipped ? 
                    <img className="back-face front-face"
                        src={BackFace}
                        alt={!this.state.isFlipped && this.state.clickedCount < 2 ? "BackFace" : this.state.card1} /> :
                    <img className="back-face front-face"
                        src={this.state.card1}
                        alt={!this.state.isFlipped && this.state.clickedCount < 2 ? "BackFace" : this.state.card1} />
                        }
                </div>
            )
        })
        return (
            <div className="memory-card-main-div">
                <h1 className="memory-card-title">Memory Card</h1>
                <section className="memory-game">
                            {cards}
                </section>
            </div>
        )
    }
}


// <div>
// <div className="memory-card"  onClick={this.handleClickFlip} data-framework="aurelia">
//     <img className="back-face"
//         src={!this.state.isFlipped ? BackFace : Pearljam}
//         alt={!this.state.isFlipped ? "JS Badge" : "Uno1"} />
// </div>
// <div className="memory-card" data-framework="aurelia">
//     <img className="front-face" src="./img/aurelia.svg" alt="Aurelia" />
//     <img className="back-face" src={BackFace} alt="JS Badge" />
// </div>
// <div className="memory-card" data-framework="vue">
//     <img className="front-face" src="./img/vue.svg" alt="Vue" />
//     <img className="back-face" src={BackFace} alt="JS Badge" />
// </div>
// <div className="memory-card" data-framework="vue">
//     <img className="front-face" src="./img/vue.svg" alt="Vue" />
//     <img className="back-face" src={BackFace} alt="JS Badge" />
// </div>
// </div>

// <div>
// <div className="memory-card" data-framework="angular">
//     <img className="front-face" src="./img/angular.svg" alt="Angular" />
//     <img className="back-face" src={BackFace} alt="JS Badge" />
// </div>
// <div className="memory-card" data-framework="angular">
//     <img className="front-face" src="./img/angular.svg" alt="Angular" />
//     <img className="back-face" src={BackFace} alt="JS Badge" />
// </div>
// <div className="memory-card" data-framework="ember">
//     <img className="front-face" src="./img/ember.svg" alt="Ember" />
//     <img className="back-face" src={BackFace} alt="JS Badge" />
// </div>
// <div className="memory-card" data-framework="ember">
//     <img className="front-face" src="./img/ember.svg" alt="Ember" />
//     <img className="back-face" src={BackFace} alt="JS Badge" />
// </div>
// </div>

// <div>
// <div className="memory-card" data-framework="backbone">
//     <img className="front-face" src="./img/backbone.svg" alt="Backbone" />
//     <img className="back-face" src={BackFace} alt="JS Badge" />
// </div>
// <div className="memory-card" data-framework="backbone">
//     <img className="front-face" src="./img/backbone.svg" alt="Backbone" />
//     <img className="back-face" src={BackFace} alt="JS Badge" />
// </div>
// <div className="memory-card" data-framework="react">
//     <img className="front-face" src="img/react.svg" alt="React" />
//     <img className="back-face" src={BackFace} alt="JS Badge" />
// </div>
// <div className="memory-card" data-framework="react">
//     <img className="front-face" src="img/react.svg" alt="React" />
//     <img className="back-face" src={BackFace} alt="JS Badge" />
// </div>
// </div>
// </section>
// </div>
// )
// }
// }


export default MemoryCard;