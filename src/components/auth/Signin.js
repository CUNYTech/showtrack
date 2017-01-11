import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/';

class Signin extends Component {

  componentWillMount(){
    document.body.setAttribute('id', 'bg-image');
  }
  componentWillUnmount(){
    document.body.removeAttribute('id', 'bg-image');
  }

  handleFormSubmit({ username, password }) {
    this.props.signinUser({ username, password });
}
  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { username, password }} = this.props;

    return (
      <div className="half">
        <div className="row">
          <div className="col-sm-4"></div>
            <div className="col-sm-6 well">
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
          <div className="col-sm-2"></div>

        </div>
        <div className="row">

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
}, mapStateToProps, actions)(Signin);
