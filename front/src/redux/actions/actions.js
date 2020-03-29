export function addType(types) {
    return {
        type: "ADD_TYPE",
        payload: types
    }
}
export function addNewGroupClicked(clicked) {
    return {
        type: "ADD_NEW_GROUP_CLICKED",
        payload: clicked
    }
}