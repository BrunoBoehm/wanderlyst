import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'

function ItinerariesIndex(props){

  function renderActivities(activity) {
    return(
        <li key={activity.id}>{activity.name}</li>
    )
  }

  function renderLocations(location) {
    return(
      <div>
        <li key={location.id}>{location.city}</li>
        <ul>
          {location.activities.map(renderActivities)}
        </ul>
      </div>
    )
  }

  function renderDays(day) {
    return(
      <div>
        <li key={day.id}>Day {day.day}</li>
        <ul>
          {day.locations.map(renderLocations)}
        </ul>
      </div>
    )
  }

  function renderItineraries(itinerary) {
    return (
      <div>
        <li key={itinerary.id}>
          <Link to={`/itineraries/${itinerary.id}`}>{itinerary.name}</Link>
        </li>
        <ul>
          {itinerary.days.map(renderDays)}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {props.itineraries.map(renderItineraries)}
      </ul>
    </div>
  )
}

function mapStateToProps(state){
  return {
    itineraries: state.itineraries
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(ItinerariesIndex);
