import React from "react";
import DetailDialog from "../Components/DetailDialog.js";

const ViewDetailDialog = props => {
  return (
    <div className="">
      <DetailDialog
        name={props.name}
        details={props.details}
        open={props.open}
        onClose={props.onClose}
      />
    </div>
  );
};

export default ViewDetailDialog;
