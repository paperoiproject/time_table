import React, { Component } from "react";
import ViewTabs from "../ViewContainers/ViewTabs.js";

class AppTabs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <ViewTabs labels={this.props.labels}/>
      </div>
    );
  }
}

export default AppTabs;
