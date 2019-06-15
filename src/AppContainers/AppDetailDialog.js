import React, { Component } from "react";
import ViewDetailDialog from "../ViewContainers/ViewDetailDialog.js";

class AppDetailDialog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <ViewDetailDialog
          name={this.props.name}
          details={this.props.details}
          open={this.props.open}
          onClose={() => {
            this.props.onClose();
          }}
        />
      </div>
    );
  }
}

export default AppDetailDialog;
