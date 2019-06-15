import React from 'react';
import TitleBar from '../Components/TitleBar.js';

const ViewTitleBar = (props) => {
  return (
    <div className="">
      <TitleBar title={props.title}/>
   </div>
  );
}

export default ViewTitleBar;

