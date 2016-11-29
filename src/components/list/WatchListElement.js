import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class WatchListElement extends Component {

  componentWillMount() {
    this.props.fetchSeasons(this.props.show.show_id);
  }

  renderProgress() {
    let episodesPerSeason = this.props.episodesPerSeason[this.props.show.show_id];
    console.log(this.props.show.show_details.content.name, episodesPerSeason);
  }

  render() {
    if(!this.props.episodesPerSeason) {
      return (
        <div>Loading...</div>
      )
    }

    let show = this.props.show.show_details.content;
    return (
      <div>
        Name: {show.name}
        <br/>
        Season: {this.props.show.progress.season}
        Episode: {this.props.show.progress.episode}
        {this.renderProgress()}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    episodesPerSeason: state.show.episodesPerSeason
  }
}


export default connect(mapStateToProps, actions)(WatchListElement);
