import React, { Component } from "react";
import { connect } from "react-redux";
import ShowList from "./ShowList";
import { toggleList } from "../actions";

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
    const {
      portugal_List,
      nicaragua_List,
      marshall_Island_List,
      marshall_Show_List,
      portugal_Show_List,
      nicaragua_Show_List,
    } = listNames;
    return (
      <div>
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

        <ShowList
          dispatch={this.props.dispatch}
          list1={portugal_Show_List}
          list2={nicaragua_Show_List}
          list3={marshall_Show_List}
        />
      </div>
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
