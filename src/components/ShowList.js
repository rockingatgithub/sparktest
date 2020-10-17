import React, { Component } from "react";
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
        <ul>
          {portugal_Show_List.map((obj, ind) => (
            <li key={ind}>
              {obj.name}
              <button onClick={() => this.toggleList(obj)}>X</button>
            </li>
          ))}
        </ul>
        {nicaragua_Show_List.length !== 0 ? <h4>Nicaragua</h4> : null}
        <ul>
          {nicaragua_Show_List.map((obj, ind) => (
            <li key={ind}>
              {obj.name}
              <button onClick={() => this.toggleList(obj)}>X</button>
            </li>
          ))}
        </ul>
        {marshall_Show_List.length !== 0 ? <h4>Marshall Islands</h4> : null}
        <ul>
          {marshall_Show_List.map((obj, ind) => (
            <li key={ind}>
              {obj.name}
              <button onClick={() => this.toggleList(obj)}>X</button>
            </li>
          ))}
        </ul>
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
