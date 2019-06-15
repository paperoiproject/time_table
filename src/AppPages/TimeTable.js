import React, { Component } from "react";

import AppLists from "../AppContainers/AppLists.js";
import AppAddButton from "../AppContainers/AppAddButton.js";
import AppAddDialog from "../AppContainers/AppAddDialog.js";
import AppDetailDialog from "../AppContainers/AppDetailDialog.js";

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judg: true,
      flag1: false,
      flag2: false
    };
  }

  handleClickFlag1() {
    this.setState({
      flag1: !this.state.flag1
    });
  }

  handleClickFlag2() {
    this.setState({
      flag2: !this.state.flag2
    });
  }

  render() {
    return (
      <div className="">
        <AppDetailDialog
          name={this.props.name}
          details={this.props.details}
          open={this.state.flag2}
          onClose={() => {
            this.handleClickFlag2();
          }}
        />
        <AppAddDialog
          items={this.props.items}
          autoSuggestion={e => { this.props.autoSuggestion(e) }}
          keyJudg={e => this.props.keyJudg(e)}
          addList={item => {
            this.props.addList(item);
            this.handleClickFlag1();
          }}
          startSearch={() => { this.props.startSearch() }}
          open={this.state.flag1}
          onClose={() => {
            this.handleClickFlag1();
          }}
        />
        <AppLists
          items={this.props.itemsForTimeTable}
          judg={this.state.judg}
          deleteList={index => {
            this.props.deleteList(index);
          }}
          detailList={(name, details) => {
            this.props.detailList(name, details);
            this.handleClickFlag2();
          }}
        />
        <AppAddButton
          addClick={e => {
            this.props.addClick(e);
            this.handleClickFlag1();
          }}
        />
      </div>
    );
  }
}

export default TimeTable;
