import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link id="my-shows" className="nav-link" to="/my-list">My Shows <i className="fa fa-television" aria-hidden="true"></i></Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link id="search" className="nav-link" to="/search"> Search <i className="fa fa-search" aria-hidden="true"></i></Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/signout">Logout <i className="fa fa-sign-out" aria-hidden="true"></i></Link>
        </li>
      ]
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link id="sign-in" className="nav-link" to="/signin">Login</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link id="sign-up" className="nav-link" to="/signup">Register</Link>
        </li>
      ];
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">

          <Link to="/" id="navbar-brand" className="navbar-brand">ShowTrack <i className="fa fa-film fa-2x" aria-hidden="true"></i></Link>

          <ul className="nav navbar-nav pull-sm-right">
            {this.renderLinks()}
          </ul>

        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
