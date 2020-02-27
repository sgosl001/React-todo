import React from "react";
import ListItem from "./listItem";
import Card from "react-bootstrap/Card";
import { Droppable } from "react-beautiful-dnd";
import uuid from "uuid";

const List = ({ title, items, listID, id }) => {
    return ( 
        <div>
            <Droppable droppableId={String(id) }>
                {provided => (
                    <Card>
                        <Card.Body                        
                            {...provided.droppableProps} 
                            ref={provided.innerRef}
                        >
                            <h3>{title}</h3>
                            {items.map((item, index) => (
                                <ListItem 
                                    key={uuid()} 
                                    listID={listID} 
                                    id={uuid()} 
                                    text={item.text}
                                    index={index}
                                />
                            ))}
                        </Card.Body>
                        {provided.placeholder}
                    </Card>
                )}
            </Droppable> 
        </div>
    );
};

export default List