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

export function deleteGroup(group) {
    return {
        type: "DELETE_GROUP",
        payload: group
    }
}

export function groupToEdit(group, bool) {
    return {
        type: "GROUP_TO_EDIT",
        payload: group,
        clicked: bool
    }
}

export function editGroupClicked( bool) {
    return {
        type: "EDIT_GROUP_CLICKED",
        payload: bool
    }
}

export function updateGroup(group) {
    return {
        type: "UPDATE_GROUP",
        payload: group
    }
}