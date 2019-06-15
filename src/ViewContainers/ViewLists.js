import React from "react";
import Lists from "../Components/Lists.js";

const ViewLists = props => {
  return (
    <div className="">
      <Lists
        judg={props.judg}
        image={props.image}
        name={props.name}
        onClick={props.onClick}
        onEvent={props.onEvent}
      />
    </div>
  );
};

export default ViewLists;
