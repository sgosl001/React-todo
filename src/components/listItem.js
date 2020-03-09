import React, { useState } from "react";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Draggable } from "react-beautiful-dnd";
import { editItem } from  '../actions';

const ListItem = ({ listID, text, id, index, dispatch }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [itemText, setText] = useState(text);

    const handleShow = () => setIsEditing(true);
    const handleClose =() => setIsEditing(false);

    const handleChange = e => {
        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsEditing(false);
        
        dispatch(editItem(id, listID, itemText));
    }

    const handleDelete = e => {
        e.preventDefault();

    }

    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div                 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    >
                    <Card style={{ margin: "10px" }}>
                        <Card.Body>
                            <p>{ text }</p>
                        </Card.Body>
                        <Card.Footer>
                            <Button 
                                size="sm" 
                                onClick={handleShow}
                                variant="outline-primary"
                                style={{width: "85%",
                                        marginRight: "5%"
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button 
                                size="sm"
                                variant="outline-danger"
                                style={{width: "10%"}}
                                >
                                    X
                                </Button>
                        </Card.Footer>
                    </Card>
                    <Modal show={isEditing} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Body>
                            <Form>
                                <Form.Control
                                    defaultValue={itemText}
                                    onChange={handleChange}
                                    />
                                <Button onClick={handleSubmit}>Add</Button>
                            </Form>
                        </Modal.Body>
                    </Modal.Header>
            </Modal>
                </div>
            )}
        </Draggable>
        
    )
}

export default connect() (ListItem);