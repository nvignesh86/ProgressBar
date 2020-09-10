import React from 'react';
export default function Bar(props){
    const value = props.value ? props.value : 0;
    const limit = props.limit ? props.limit : 0;
    let computedVal = Math.ceil((value/limit)*100);
    let color = "#64C0FF";
    if(computedVal > 100){
      computedVal = 100;
      color = "#FC5D5D";
    }
    return (
      <div className="bar-container">
        <div className="bar-color" style={{width: computedVal+"%", backgroundColor: color}}>
        </div>
        <p className="bar-text">
          {value}
        </p>
      </div>
    )
  }
  