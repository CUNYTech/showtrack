import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions'

class Signin extends Component {
  handleFormSubmit({ username, password }) {
    // Need to do something to log user in
    this.props.signinUser({ username, password});
}
  renderAlert() {
    if(this.props.errorMessge) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessge}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { username, password }} = this.props;

    return (
      <div className="half">
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Username</label>
            <input {...username} type="text" placeholder="Enter username" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input {...password} type="password" placeholder="Enter password" className="form-control" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary pull-right">Sign in</button>
      </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessge: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
}, mapStateToProps, actions)(Signin);

// gives us access to actions as props in our redux form
