import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Link } from 'react-router';

class WatchListElement extends Component {
  constructor(props) {
    super(props)

    this.state = {
      season: this.props.show.progress.season,
      episode: this.props.show.progress.episode
    }
  }

  componentWillMount() {
    this.props.fetchSeasons(this.props.show.show_id);
  }

  updateProgressWatchList() {
    this.props.updateProgressWatchList(this.props.show.show_id, {season: '2', episode:'3'})
  }

  renderProgress() {
    let episodesPerSeason = this.props.episodesPerSeason[this.props.show.show_id];

    var options = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' },
      { value: '6', label: '6' },
      { value: '7', label: '7' },
      { value: '8', label: '8' },
      { value: '9', label: '9' },
      { value: '10', label: '10' }
    ];

    return (
      <div>
        <Select
            name="form-field-name"
            value={this.state.season}
            options={options}
            onChange={this.logChange}
            className="col-md-2"
        />
        <Select
          name="form-field-name"
          value={this.state.episode}
          options={options}
          onChange={this.logChange}
          className="col-md-2"
        />
      <button type="button" onClick={() => (this.updateProgressWatchList())} className="btn btn-default btn-md"> Save </button>
      </div>
    )
  }


     logChange(val) {
        console.log("Selected: " + val);
    }

    renderImage() {
      return (
        !this.props.show.show_details.content.image.medium ?
          <img className='img-rounded' src='http://placehold.it/210x295' role="presentation"/>
        :
        <div>
          <img className='img-rounded' src={this.props.show.show_details.content.image.medium} role="presentation"/>
        </div>
      )
  }

  renderCurrentProgress() {
    return (
      <p>You are currently on <strong>season {this.props.show.progress.season}</strong> and <strong>episode {this.props.show.progress.episode}</strong>!</p>
    )
  }

  renderDate() {
    var date = this.props.show.last_updated;
    var newDate = date.slice(0,10);

    return (
      <div>Last Updated: {newDate}</div>
    )
  }

  render() {
    if(!this.props.episodesPerSeason) {
      return (
        <div>Loading...</div>
      )
    }

    let show = this.props.show.show_details.content;

    return (
      <div className="well">
        <div className="row" style={{ marginBottom: 10 }}>
          <h4 className="col-md-6 text-center">{show.name}</h4>
        </div>
        <div className="row">
            <div className="col-md-6 text-center">{this.renderImage()}</div>
            <p className="col-md-6" dangerouslySetInnerHTML={{__html: show.summary}} ></p>
            <Link to={"/shows/"+ this.props.show.show_id}>View more details</Link>
            {this.renderDate()}
            {this.renderCurrentProgress()}
            {this.renderProgress()}
        </div>
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
