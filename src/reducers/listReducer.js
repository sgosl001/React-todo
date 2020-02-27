import uuid from 'uuid';
import { addItem } from '../actions';

const initialState = [
    {
        title: "To Do",
        id: 0,
        items: [
            {
                id: 0,
                text: "some garbage"
            },
            {
                id: 1,
                text: "another garbage"
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
        case 'ADD_ITEM':

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

        default:
            return state;
    }
};

export default listReducer;