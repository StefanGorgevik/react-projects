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
export function changeMode(mode) {
    return {
        type: "CHANGE_MODE",
        payload: mode
    }
}

export function saveGroup(group) {
    return {
        type: "SAVE_GROUP",
        payload: group
    }
}
