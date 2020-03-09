import React from "react";
import ListItem from "./listItem";
import Card from "react-bootstrap/Card";
import { Droppable } from "react-beautiful-dnd";
import uuid from "uuid";

const List = ({ title, items, listID, id, dispatch }) => {
    return ( 
        <Card>
            <Card.Header style={{ textAlign: "center" }}>{title}</Card.Header>
            <Droppable droppableId={String(listID)}>
                {provided => (
                    <Card.Body
                        {...provided.droppableProps} 
                        ref={provided.innerRef}
                        >
                        {items.map((item, index) => (
                            <ListItem 
                                key={uuid()} 
                                listID={listID} 
                                id={item.id} 
                                text={item.text}
                                index={index}
                                dispatch={dispatch}
                            />
                        ))}
                        {provided.placeholder}
                    </Card.Body>
                )}
            </Droppable> 
        </Card>
    );
};

export default List