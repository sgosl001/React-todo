import uuid from 'uuid';

const initialState = [
    {
        title: "To Do",
        id: 0,
        items: [
            {
                id: 0,
                listID: 0,
                text: "dummy data"
            }
        ]
    },
    {
        title: "In Progress",
        id: 1,
        items: []
    },
    {
        title: "Completed",
        id: 2,
        items: []
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ITEM': {

            const newState = state.map(list => {
                if (list.id === 0) {
                    return {
                        ...list,
                        items: [...list.items, action.payload]
                    };
                } else {
                    return list;
                }
            });

            return newState;
        }

        case 'EDIT_ITEM': {
            const { id, listID, newText } = action.payload;
            
            const newState = state.map(list => {
                if (list.id === listID) {
                    return {
                        ...list,
                        items: Object.assign([...list.items], { [id]: action.payload })
                    };
                } else {
                    return list;
                }
            });

            return newState;
        }

        case 'DRAG_HAPPENED': {
                const {             
                    droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                } = action.payload;

                const newState = [...state];

                if(droppableIdStart === droppableIdEnd) {
                    const list = state[droppableIdStart];
                    const item = list.items.splice(droppableIndexStart, 1);
                    list.items.splice(droppableIndexEnd, 0, ...item);
                }

                if(droppableIdStart !== droppableIdEnd) {
                    const listStart = state[droppableIdStart];
                    const item = listStart.items.splice(droppableIndexStart, 1);
                    const listEnd = state[droppableIdEnd];
                    listEnd.items.splice(droppableIndexEnd, 0, ...item);
                }

                return newState;
            
            }
        default:
            return state;
    }
};

export default listReducer;