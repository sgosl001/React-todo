import React from "react";
import { connect } from "react-redux";
import { addItem } from  '../actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'uuid';

class AddItem extends React.Component {
    state = {
        text: ""
    }

    handleChange = input => {
        this.setState({
            text: input 
        });
    };

    handleAddItem = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            dispatch(addItem(uuid(), 0, text));
        }
        
        
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleAddItem}>
                    <Form.Group className="d-flex" controlId="todoItem">
                        <Form.Control
                            className="w-75 mx-2 rounded-pill"
                            type="text" 
                            placeholder="enter a todo item"
                            onChange={e => this.handleChange(e.target.value)}
                            />
                        <Button 
                            type="submit" 
                            className="btn btn-info w-25 rounded-pill"
                            >
                            Add Item
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default connect() (AddItem);