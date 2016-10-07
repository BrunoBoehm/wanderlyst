import React from 'react';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DayForm from './day_form';


class ItinerariesNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itinerary: {
        name: "",
        days: [{
          day: 1,
          locations: [{
            id: 1,
            city: "",
            activities: [{
              id: 1,
              name: ""
            }]
          }]
        }]
      }
    }
    this.addDay = this.addDay.bind(this)
    this.addLocation = this.addLocation.bind(this)
    this.addActivity = this.addActivity.bind(this)
    // this.newItineraryHandler = this.newItineraryHandler.bind(this)
    this.updateItineraryName = this.updateItineraryName.bind(this)
    this.updateLocation = this.updateLocation.bind(this)
    this.updateActivity = this.updateActivity.bind(this)
  }

  // newItineraryHandler(event) {
  //   event.preventDefault();
  //   const newItinerary = {
  //     itinerary: {
  //       name: this.refs["itinerary-name"].value,
  //       days: [{
  //         day: this.refs[{}].refs["day-name"].value,
  //         locations: [{
  //           city: this.refs[{}].refs[{}].refs["location-name"].value,
  //           activities: [{
  //             name: this.refs[{}].refs[{}].refs[{}].refs["activity-name"].value
  //           }]
  //         }]
  //       }]
  //     }
  //   }
  //   this.props.actions.createItinerary(newItinerary)
  // }

  addDay(event) {
    event.preventDefault()
    const copyOfState = Object.assign({},this.state)
    const dayLength = this.state.itinerary.days.length+1
    copyOfState.itinerary.days.push({
      day: dayLength,
      locations: [{
        id: 1,
        city: "",
        activities: [{
          id: "",
          name: ""
        }]
      }]
    })
    this.setState(copyOfState)
  }

  addLocation(event) {
    const day = event.target.id
    event.preventDefault()
    const copyOfState = Object.assign({},this.state)
    const locationLength = this.state.itinerary.days[day-1].locations.length+1
    copyOfState.itinerary.days[day-1].locations.push({
      id: locationLength,
      city: "",
      activities: [{
        id: 1,
        name: ""
      }]
    })
    this.setState(copyOfState)
  }

  addActivity(event) {
    const location = event.target.id
    const day = event.target.name
    event.preventDefault()
    const copyOfState = Object.assign({},this.state)
    const activitiesLength = this.state.itinerary.days[day-1].locations[location-1].activities.length+1
    copyOfState.itinerary.days[day-1].locations[location-1].activities.push({
      id: activitiesLength,
      name: ""
    })
    this.setState(copyOfState)
  }

  updateItineraryName(event) {
    const copyOfState = Object.assign({},this.state)
    copyOfState.itinerary.name = event.target.value
    this.setState(copyOfState)
  }

  updateLocation(event) {
    const location = event.target.id
    const day = event.target.name
    const newValue = event.target.value
    const copyOfState = Object.assign({},this.state)
    copyOfState.itinerary.days[day-1].locations[location-1].city = newValue
    this.setState(copyOfState)
  }

  updateActivity(event) {
    const location = event.target.id
    const day = event.target.name
    const activity = event.target.alt
    const newValue = event.target.value
    const copyOfState = Object.assign({},this.state)
    copyOfState.itinerary.days[day-1].locations[location-1].activities[activity-1].name = newValue
    this.setState(copyOfState)
  }

  collectDayForm() {
    return this.state.itinerary.days.map((day) => {
      return <div className="panel panel-default"><div className="panel-heading">Day {day.day}</div><div id="collapseOne" className="panel-collapse collapse in"><div className="panel-body"><DayForm day={day} addLocation={this.addLocation} addActivity={this.addActivity} updateLocation={this.updateLocation} updateActivity={this.updateActivity} ref={this.refs} /></div></div></div>
    })
  }


  render() {
    const dayFormElements = this.collectDayForm()
    return(
      <div className="col-lg-8">
        <div className="panel panel-default">
          <form>
            <div className="panel-heading">
              <div className="form-inline">
                <label>Itinerary Name:</label>
                <input type="text" ref="itinerary-name" onChange={this.updateItineraryName} />
              </div>
              <button onClick={this.addDay}>+ Date</button>
            </div>
            <div className="panel-body">
              <div className="panel-group">
              {dayFormElements}
              </div>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(ItinerariesNew)
