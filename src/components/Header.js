import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      //link to sign out
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/home">Home </Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/search">Search </Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/signout">Logout </Link>
        </li>
      ]
    } else {
      // link to sign in
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Login</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Register</Link>
        </li>
      ];
    }
  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">ShowTrack </Link>
        <ul className="nav navbar-nav pull-sm-right">
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
