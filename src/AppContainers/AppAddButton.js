import React, { Component } from "react";
import ViewAddButton from "../ViewContainers/ViewAddButton.js";

class AppAddButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <ViewAddButton
          onClick={e => { this.props.addClick(e) } }
        />
      </div>
    );
  }
}

export default AppAddButton;
