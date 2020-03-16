const initState = {
    card: ''
}

export function reducer (state = initState, action ) {
    switch(action.type) {
        case "GET_QUESTIONS": {
            return {
                ...state, card: action.payload
            }
        }
       
        default:
            return state;
    }
}