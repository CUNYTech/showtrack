import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Accordion from './Accordion';

class EpisodeDetail extends Component {
 constructor(props) {
   super(props)

 }
  render() {
    return (
      <div>EpisodeDetail component </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    show: state.search.show,
    episodes: state.show.episodes
  }
}

export default connect(mapStateToProps, actions) (EpisodeDetail);
