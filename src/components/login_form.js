import React from 'react';
// import TextInput from './common/TextInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {browserHistory} from 'react-router';
import App from './app';
import { Route } from 'react-router';

// export default function LoginForm(props) {
class LogInForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials)
  }
  onChangeHandler(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }
  render(){
    return(
      <div className="center">
        <div className="col-lg-3">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2 className="panel-title">
                Log In
              </h2>
            </div>
            <div className="form-inline">
              <form onSubmit={this.onSave}>
                <label>Username:</label>
                <br />
                <input className="form-control" type="text" name="username" onChange={this.onChangeHandler} value={this.state.credentials.username} />
                <br />
                <label>Password:</label>
                <br />
                <input className="form-control" type="password" name="password" onChange={this.onChangeHandler} value={this.state.credentials.password} />
                <br />
                <input className="btn btn-default" type="submit"/>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    session: state.session
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
