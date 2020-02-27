import React from "react";
import Card from 'react-bootstrap/Card';
import { Draggable } from "react-beautiful-dnd";

const ListItem = ({ listID, text, id, index }) => {
    // needs text input
    return (
        <Draggable draggableId={String(id)} index={index}>
            {(provided) => (
                <Card
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                >
                    <Card.Body>
                        <p>{ text }</p>
                    </Card.Body>
                </Card>
            )}
        </Draggable>
    )
}

export default ListItem