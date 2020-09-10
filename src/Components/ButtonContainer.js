import React from 'react';
import Button from './Button';

export default function ButtonContainer(props){

    return  props.buttons ? props.buttons.map((button, key) => {
        let value = button.toString();

        if(value.indexOf("-") === -1){
          value = "+" + value;
        }
        return (
          <Button
            key={key}
            value={value}
            onClick={(e) => props.updateBarValue(e, value)}
          />
        )
      }) : [];
   

}