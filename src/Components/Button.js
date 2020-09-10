import React from 'react';
export default function Button(props){
    const value = props.value ? props.value : "N/A";
    return (
      <button className={"button "+(value<0?"red":"green")} onClick={props.onClick}>
        {value}
      </button>
    );
  }
  