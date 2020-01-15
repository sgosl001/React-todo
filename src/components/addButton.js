import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

class AddButton extends React.Component {
    renderAddButton = () => {
        const { list } = this.props;

        return (
            <div>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Control type="text" placeholder="Enter a new ToDo item" />
                        <Button variant="primary" type="submit">Add</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }

    render() {
        return this.renderAddButton();
    }
}

export default AddButton;