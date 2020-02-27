export const addItem = ( text, id ) => ({
    type: 'ADD_ITEM',
    payload: { text, id }
});

export const removeItem = ({ id } = {}) => ({
    type: 'REMOVE_ITEM',
    id
});

//EDIT_ITEM
//MOVE_ITEM