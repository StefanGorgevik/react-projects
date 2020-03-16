export const getCard = (card) => {
    return {
        type: "GET_CARD",
        payload: card
    }
}
export const gameOver = (bool) => {
    return {
        type: "GAME_OVER",
        payload: bool
    }
}