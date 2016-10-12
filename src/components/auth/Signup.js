import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions'

class Signup extends Component {
  handleFormSubmit(formProps) {
    // call action creator to sign up the user
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
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email Address</label>
          <input {...email} type="email" placeholder="Enter email" className="form-control" />
          <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
          {email.touched && email.error && <div className="error"><strong>{email.error}</strong></div>}
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
        <button action="submit" className="btn btn-primary">Register</button>

      </form>
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
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);

// gives us access to actions as props in our redux form
