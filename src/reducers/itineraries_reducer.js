import {browserHistory} from 'react-router';

export default function itinerariesReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_ITINERARIES':
      return action.payload;
    case 'MY_ITINERARIES':
    // debugger
      browserHistory.push('/my-lyst');
      return action.payload;
    case 'SEARCHED_ITINERARIES':
      return action.payload
    case 'CREATE_ITINERARY':
    debugger;
      browserHistory.push('/itineraries')
      return [...state, action.payload]
    case 'FETCH_ITINERARY':
      return action.payload
    case 'UPDATE_ITINERARY':
      return [...state, action.payload]
    default:
      return state;
  }
};
