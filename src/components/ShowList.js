import React, { Component } from "react";
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
    const { list1, list2, list3 } = this.props;
    return (
      <div>
        {list1.length !== 0 ? <h4>Portugal</h4> : null}
        <ul>
          {list1.map((obj, ind) => (
            <li key={ind}>
              {obj.name}
              <button onClick={() => this.toggleList(obj)}>X</button>
            </li>
          ))}
        </ul>
        {list2.length !== 0 ? <h4>Nicaragua</h4> : null}
        <ul>
          {list2.map((obj, ind) => (
            <li key={ind}>
              {obj.name}
              <button onClick={() => this.toggleList(obj)}>X</button>
            </li>
          ))}
        </ul>
        {list3.length !== 0 ? <h4>Marshall Islands</h4> : null}
        <ul>
          {list3.map((obj, ind) => (
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

export default ShowList;
