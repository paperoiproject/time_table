import React, { Component } from "react";
import ViewLists from "../ViewContainers/ViewLists.js";

import "../App.css";

class AppLists extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Lists">
        {this.props.items.map((item, index) => {
          return (
            <ViewLists
              image={item.image}
              name={item.name}
              judg={this.props.judg}
              onClick={() => {
                this.props.deleteList(index);
              }}
              onEvent={() => {
                this.props.detailList(item.name, item.details);
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default AppLists;
