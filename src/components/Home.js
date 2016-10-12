import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }
  render() {
    return (
      <div>Home page</div>
    )
  }
}

export default connect(null, actions)(Home);
