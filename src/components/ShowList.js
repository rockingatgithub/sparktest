import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { toggleList } from "../actions";

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleList = (obj) => {
    this.props.dispatch(toggleList(obj));
  };

  render() {
    const {
      portugal_Show_List,
      nicaragua_Show_List,
      marshall_Show_List,
    } = this.props.listNames;
    return (
      <div>
        {portugal_Show_List.length !== 0 ? <h4>Portugal</h4> : null}
        <ListGroup>
          {portugal_Show_List.map((obj, ind) => (
            <ListGroup.Item key={ind}>
              {obj.name}
              <Button onClick={() => this.toggleList(obj)}>X</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        {nicaragua_Show_List.length !== 0 ? <h4>Nicaragua</h4> : null}
        <ListGroup>
          {nicaragua_Show_List.map((obj, ind) => (
            <ListGroup.Item key={ind}>
              {obj.name}
              <Button onClick={() => this.toggleList(obj)}>X</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        {marshall_Show_List.length !== 0 ? <h4>Marshall Islands</h4> : null}
        <ListGroup>
          {marshall_Show_List.map((obj, ind) => (
            <ListGroup.Item key={ind}>
              {obj.name}
              <Button onClick={() => this.toggleList(obj)}>X</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps({ listNames }) {
  return {
    listNames,
  };
}

export default connect(mapStateToProps)(ShowList);
