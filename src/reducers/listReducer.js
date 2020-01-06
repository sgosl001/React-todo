const initialState = [
    {
        title: "To Do",
        id: 0,
        listItems: [
            {
                id: 0,
                text: "first item"
            },
            {
                id: 1,
                text: "second item"
            }
        ]
    },
    {
        title: "In Progress",
        id: 1,
        listItems: [
            {
                id: 0,
                text: "In Prog"
            }
        ]
    },
    {
        title: "Completed",
        id: 2,
        listItems: [
            {
                id: 0,
                text: "complete"
            }
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default listReducer;