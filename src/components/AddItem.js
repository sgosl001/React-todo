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

    handleAddItem = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            dispatch(addItem(uuid(), 0, text));
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="todoItem">
                        <Form.Control 
                            type="text" 
                            placeholder="enter a todo item"
                            onChange={e => this.handleChange(e.target.value)}
                            />
                        <Button type="submit" variant="primary" onClick={this.handleAddItem}>
                            Add ToDo
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default connect() (AddItem);