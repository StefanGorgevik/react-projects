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



// function mapStateToProps(state) {
//     return {
//         card: state.card
//     }
// }



// export default connect(mapStateToProps)(CardDraw);

// import {connect } from 'react-redux'
// import store from '../../redux/store'
// import {getCard } from '../../redux/actions/actions'

// // eslint-disable-next-line 
// import C2 from '../../assets/images/cards/2C.jpg'
// // eslint-disable-next-line 
// import D2 from '../../assets/images/cards/2D.jpg'
// // eslint-disable-next-line 
// import H2 from '../../assets/images/cards/2H.jpg'
// // eslint-disable-next-line 
// import S2 from '../../assets/images/cards/2S.jpg'

// import C3 from '../../assets/images/cards/3C.jpg'
// import D3 from '../../assets/images/cards/3D.jpg'
// import H3 from '../../assets/images/cards/3H.jpg'
// import S3 from '../../assets/images/cards/3S.jpg'

// import C4 from '../../assets/images/cards/4C.jpg'
// import D4 from '../../assets/images/cards/4D.jpg'
// import H4 from '../../assets/images/cards/4H.jpg'
// import S4 from '../../assets/images/cards/4S.jpg'

// import C5 from '../../assets/images/cards/5C.jpg'
// import D5 from '../../assets/images/cards/5D.jpg'
// import H5 from '../../assets/images/cards/5H.jpg'
// import S5 from '../../assets/images/cards/5S.jpg'

// import C6 from '../../assets/images/cards/6C.jpg'
// import D6 from '../../assets/images/cards/6D.jpg'
// import H6 from '../../assets/images/cards/6H.jpg'
// import S6 from '../../assets/images/cards/6S.jpg'

// import C7 from '../../assets/images/cards/7C.jpg'
// import D7 from '../../assets/images/cards/7D.jpg'
// import H7 from '../../assets/images/cards/7H.jpg'
// import S7 from '../../assets/images/cards/7S.jpg'

// import C8 from '../../assets/images/cards/8C.jpg'
// import D8 from '../../assets/images/cards/8D.jpg'
// import H8 from '../../assets/images/cards/8H.jpg'
// import S8 from '../../assets/images/cards/8S.jpg'

// import C9 from '../../assets/images/cards/9C.jpg'
// import D9 from '../../assets/images/cards/9D.jpg'
// import H9 from '../../assets/images/cards/9H.jpg'
// import S9 from '../../assets/images/cards/9S.jpg'

// // eslint-disable-next-line 
// import C10 from '../../assets/images/cards/10C.jpg'
// // eslint-disable-next-line 
// import D10 from '../../assets/images/cards/10D.jpg'
// // eslint-disable-next-line 
// import H10 from '../../assets/images/cards/10H.jpg'
// // eslint-disable-next-line 
// import S10 from '../../assets/images/cards/10S.jpg'
