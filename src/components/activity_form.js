import React from 'react';

class ActivityForm extends React.Component {
  constructor(props){
    super(props);
    // this.addActivity = this.addActivity.bind(this)
  }


  // addActivity(event) {
  //   event.preventDefault();
  //   this.props.addActivity(this.props.location);
  // }

  render(){
    return(
      <div>
        <input type="text" ref="activity-name"/>
      </div>
    )
  }
}

export default ActivityForm
