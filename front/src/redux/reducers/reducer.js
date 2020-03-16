const initState = {
    card: '',
    gameOver: false
}

export function reducer (state = initState, action ) {
    switch(action.type) {
        case "GET_QUESTIONS": {
            return {
                ...state, card: action.payload
            }
        }
        case "GAME_OVER": {
            return {
                ...state, gameOver: action.payload
            }
        }
       
        default:
            return state;
    }
}