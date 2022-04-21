import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Draggable } from 'react-beautiful-dnd';
import { editItem, removeItem } from '../actions';

const ListItem = ({ listID, text, id, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [itemText, setText] = useState(text);

  const handleShow = () => setIsEditing(true);
  const handleClose = () => setIsEditing(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);

    dispatch(editItem(id, listID, itemText));
  };

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(removeItem(id, listID, itemText));
  };

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card className='m-2 rounded'>
            <Card.Body>
              <p>{text}</p>
            </Card.Body>
            <Card.Footer className='d-flex'>
              <Button
                size='sm'
                onClick={handleShow}
                variant='outline-info'
                className='rounded-pill w-75'
              >
                Edit
              </Button>
              <Button
                onClick={handleDelete}
                size='sm'
                variant='outline-danger'
                className='text-center rounded-pill ml-2 w-15'
              >
                X
              </Button>
            </Card.Footer>
          </Card>
          <Modal className='modal fade' show={isEditing} onHide={handleClose}>
            <Modal.Header closeButton> Editing </Modal.Header>
            <Form>
              <Modal.Body>
                <Form.Group className='d-flex' controlId='EditItem'>
                  <Form.Control
                    as='textarea'
                    defaultValue={itemText}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type='submit'
                  className='w-25 ml-3 btn btn-info rounded-pill'
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </div>
      )}
    </Draggable>
  );
};

export default connect()(ListItem);
