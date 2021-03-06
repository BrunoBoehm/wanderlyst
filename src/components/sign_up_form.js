import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';

class SignUpForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: ""
      }
    }
    this.credentials = {
      credentials: {
        username: '',
        password: ''
      }
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.newUserHandler = this.newUserHandler.bind(this);
  }
  onChangeHandler(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }
  newUserHandler(event) {
    event.preventDefault();
    this.props.actions.createUser(this.state)
    this.props.actions.logInUser(this.credentials)
  }
  render(){
    return(
      <div className="center">
        <div className="col-lg-3">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2 className="panel-title">
                Sign Up
              </h2>
            </div>
            <div className="form-inline">
              <form onSubmit={this.newUserHandler}>
                <label>First Name:</label>
                <br />
                <input className="form-control" type="text" name="first_name" onChange={this.onChangeHandler} value={this.state.user.first_name} />
                <br />
                <label>Last Name:</label>
                <br />
                <input className="form-control" type="text" name="last_name" onChange={this.onChangeHandler} value={this.state.user.last_name} />
                <br />
                <label>Email:</label>
                <br />
                <input className="form-control" type="text" name="email" onChange={this.onChangeHandler} value={this.state.user.email} />
                <br />
                <label>Username:</label>
                <br />
                <input className="form-control" type="text" name="username" onChange={this.onChangeHandler} value={this.state.user.username} />
                <br />
                <label>Password:</label>
                <br />
                <input className="form-control" type="password" name="password" onChange={this.onChangeHandler} value={this.state.user.password} />
                <br />
                <input className="btn btn-default" type="submit" />
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(SignUpForm);
