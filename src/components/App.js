import React, { Component } from "react";
import List from "./list";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}> Just Do </h1>
        <Container>
          <Row>
            { lists.map(list => (
              <Col>
                <List title={list.title} items={list.listItems} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
