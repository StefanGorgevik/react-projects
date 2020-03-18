import React from 'react'
import './CardDraw.css'
import BackCard from '../../assets/images/cards/Gray_back.jpg'
import DeckOfCards from '../../assets/images/deckofcards.png'

class CardDraw extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardsTypes: ["C", "D", "H", "S"],
            card: '../../assets/images/cards/10H.jpg',
            drawn: false
        }
    }

    drawACard = () => {
        var ranType = this.state.cardsTypes[Math.floor(Math.random() * 4)]
        var ranNum = Math.floor(1 + Math.random() * 12)
        var h = require(`../../assets/images/cards/${ranNum}${ranType}.jpg`)
        this.setState({ card: h, drawn: true })
    }

    render() {
        
        return (
            <div className="card-draw">
                <h1 className="card-draw-h1">CardDraw</h1>
                <img className="deck-cards" src={DeckOfCards} alt="deck-of-cards" />
                <img className="deck-cards deck-cards-follow" src={DeckOfCards} alt="deck-of-cards" />
                <div className="card" onClick={this.drawACard}>
                    {!this.state.drawn ?
                        <img className="back-card" src={BackCard} alt="card" /> :
                        <img className="back-card" src={this.state.card} alt="card" /> }
                </div>
                    <button onClick={this.drawACard} className='draw-btn'>Draw</button>
                </div>
        )
    }
}


export default CardDraw;