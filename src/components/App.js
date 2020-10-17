import React, { Component } from "react";
import { connect } from "react-redux";
import ShowList from "./ShowList";
import { toggleList } from "../actions";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlechecked = (nameobj) => {
    this.props.dispatch(toggleList(nameobj));
  };

  render() {
    const { listNames } = this.props;
    const { portugal_List, nicaragua_List, marshall_Island_List } = listNames;
    return (
      <Container fluid>
        <Row noGutters>
          <Col>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">LOGO</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col className="my-col">
            <div id="selectfromcomponent">
              <h4>Portugal</h4>
              <ul>
                {portugal_List.map((nameobj, ind) => (
                  <li key={ind}>
                    <input
                      type="checkbox"
                      checked={nameobj.checked}
                      onChange={() => this.handlechecked(nameobj)}
                    />
                    {nameobj.name}
                  </li>
                ))}
              </ul>
              <h4>Nicaragua</h4>
              <ul>
                {nicaragua_List.map((nameobj, ind) => (
                  <li key={ind}>
                    <input
                      type="checkbox"
                      checked={nameobj.checked}
                      onChange={() => this.handlechecked(nameobj)}
                    />
                    {nameobj.name}
                  </li>
                ))}
              </ul>
              <h4>Marshall Islands</h4>
              <ul>
                {marshall_Island_List.map((nameobj, ind) => (
                  <li key={ind}>
                    <input
                      type="checkbox"
                      checked={nameobj.checked}
                      onChange={() => this.handlechecked(nameobj)}
                    />
                    {nameobj.name}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col className="my-col">
            <ShowList dispatch={this.props.dispatch} />
          </Col>
        </Row>
      </Container>
    );
  }
}

function callback(state) {
  return {
    listNames: state.listNames,
  };
}

const connectedComponent = connect(callback)(App);

export default connectedComponent;
