import React, { Component } from "react";
import List from "./list";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddItem from './AddItem';
import { DragDropContext } from "react-beautiful-dnd";
import uuid from "uuid";

class App extends Component {

  onDragEnd = () => {
    //TODO: rendering logic
  }
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h1 style={{ textAlign: "center" }}> To Do </h1>
          <AddItem />
          <Container>
            <Row>
              { lists.map(list => (
                <Col key={list.id}>
                  <List 
                    title={list.title} 
                    listID={list.id} 
                    items={list.items} 
                    id={uuid()} 
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
