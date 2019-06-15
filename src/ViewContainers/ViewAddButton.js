import React from 'react';
import AddButton from '../Components/AddButton.js';

const ViewAddButton = (props) => {
  return (
    <div className="">
      <AddButton
      onClick={e => { props.onClick(e) } }/>
   </div>
  );
}

export default ViewAddButton;

