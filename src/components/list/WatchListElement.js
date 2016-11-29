import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class WatchListElement extends Component {

  componentWillMount() {
  }

  render() {
    console.log(this.props.show);
    let show = this.props.show.show_details.content;
    return (
      <div>
        Name: {show.name}
        <br/>
        Progress: {this.props.show.progress}

      </div>
    )
  }
}


export default connect(null, actions)(WatchListElement);
