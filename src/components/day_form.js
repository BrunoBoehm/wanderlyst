import React from 'react';
import LocationForm from './location_form';

export default function DayForm(props){
  // debugger;
  return(
    <div>
      <input type="text" onChange={props.onFormChange} />
    </div>
  )
}
