import React from "react";
import AddDialog from "../Components/AddDialog.js";

const ViewAddDialog = props => {
  return (
    <div className="">
      <AddDialog
        items={props.items}
        open={props.open}
        onClose={props.onClose}
        startSearch={e => { props.startSearch(e) } }
        onEvent={item => props.onEvent(item)}
        autoSuggestion={e => { props.autoSuggestion(e) }}
        keyJudg={e => { props.keyJudg(e) } }
      />
    </div>
  );
};

export default ViewAddDialog;
