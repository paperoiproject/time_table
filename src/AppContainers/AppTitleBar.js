import React, { Component } from "react";
import ViewTitleBar from "../ViewContainers/ViewTitleBar.js";

class AppTitleBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <ViewTitleBar title={this.props.title} />
      </div>
    );
  }
}

export default AppTitleBar;
