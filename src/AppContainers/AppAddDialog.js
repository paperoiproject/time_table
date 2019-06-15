import React, { Component } from "react";
import ViewAddDialog from "../ViewContainers/ViewAddDialog.js";

class AppAddDialog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <ViewAddDialog
          items={this.props.items}
          open={this.props.open}
          onClose={this.props.onClose}
          autoSuggestion={e => { this.props.autoSuggestion(e) }}
          keyJudg={e => { this.props.keyJudg(e) }}
          onEvent={item => {
            this.props.addList(item);
          }}
          startSearch={() => { this.props.startSearch() }}
        />
      </div>
    );
  }
}

export default AppAddDialog;
