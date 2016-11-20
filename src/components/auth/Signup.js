import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions'

class Signup extends Component {

  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Ooops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }
  render() {
    const { handleSubmit, fields: { email, username, display_name, password, passwordConfirm }} = this.props;

    return (
      <div className="half">
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email Address</label>
          <input {...email} type="email" placeholder="Enter email" className="form-control" />
          <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
          {email.touched && email.error && <div className="error"><strong>{email.error}</strong></div>}
        </fieldset>

        <fieldset className="form-group">
          <label>Display Name</label>
          <input {...display_name} type="text" placeholder="Enter your display name" className="form-control" />
          {display_name.touched && display_name.error && <div className="error"><strong>{display_name.error}</strong></div>}
        </fieldset>

        <fieldset className="form-group">
          <label>Username</label>
          <input {...username} type="text" placeholder="Enter username" className="form-control" />
          {username.touched && username.error && <div className="error"><strong>{username.error}</strong></div>}
        </fieldset>

        <fieldset className="form-group">
          <label>Password</label>
          <input {...password} type="password" placeholder="Enter password" className="form-control" />
          {password.touched && password.error && <div className="error"><strong>{password.error}</strong></div>}
        </fieldset>

        <fieldset className="form-group">
          <label>Confirm Password</label>
          <input {...passwordConfirm} type="password" placeholder="Confirm password" className="form-control" />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error"><strong>{passwordConfirm.error}</strong></div>}

        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary pull-right">Register</button>

      </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if(!formProps.email) {
    errors.email = 'Please enter an email.';
  }

  if(!formProps.password) {
    errors.password = 'Please enter a password.';
  }

  if(!formProps.username) {
    errors.username = 'Please enter a username.';
  }

  if(!formProps.display_name) {
    errors.display_name = 'Please enter a display name.';
  }

  if(!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation.';
  }

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = "Passwords must match";
  }
  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'username', 'display_name','password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);

// gives us access to actions as props in our redux form
