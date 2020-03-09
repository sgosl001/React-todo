export const addItem = ( id, listID, text ) => ({
    type: 'ADD_ITEM',
    payload: { id, listID, text }
});

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => {
    return {
        type: 'DRAG_HAPPENED',
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    }
}

export const removeItem = ( id, listID ) => ({
    type: 'REMOVE_ITEM',
    payload: { id, listID }
});

export const editItem = ( id, listID, text ) => ({
    type: 'EDIT_ITEM',
    payload: { id, listID, text }
})