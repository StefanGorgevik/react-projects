export const getCard = (card) => {
    return {
        type: "GET_CARD",
        payload: card
    }
}