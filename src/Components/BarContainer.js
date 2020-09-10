import React from 'react';
import Bar from './Bar';

export default function BarContainer(props){

    return props.bars ? props.bars.map((bar, key) => {
        return (
          <Bar 
          value={bar} 
          limit={props.limit} 
          key={key}
          />
        );
      }) : [];
}