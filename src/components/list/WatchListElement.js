import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Link } from 'react-router';
import Spinner from 'react-spinkit';

class WatchListElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      season: this.props.show.progress.season,
      episode: this.props.show.progress.episode
    }

    this.selectedSeason = this.selectedSeason.bind(this);
    this.selectedEpisode = this.selectedEpisode.bind(this);
  }

  componentWillMount() {
    this.props.fetchSeasons(this.props.show.show_id);
  }

  updateProgressWatchList() {
    this.props.updateProgressWatchList(this.props.show.show_id, {season: this.state.season, episode:this.state.episode})
  }

  removeShow() {
    this.props.removeShow(this.props.show)
  }

  renderProgress() {
    let episodesPerSeason = this.props.episodesPerSeason[this.props.show.show_id];
    var episodeData = {};
    var seasonData = [];

    for(let season in episodesPerSeason) {
      let episodes = [];
      for(let i = 1; i < episodesPerSeason[season]; i++) {
        let obj = {};
        obj['value'] = i;
        obj['label'] = i;
        episodes.push(obj);
      }
      episodeData[season] = episodes;

      let obj = {};
      obj['value'] = season;
      obj['label'] = season;
      seasonData.push(obj);
    }

    const episodeOptions = episodeData[this.state.season];
    const seasonOptions = seasonData;

    return (
      <div className="row">
        <div className="col-sm-6">
          <h6>Current Season: </h6>
          <Select
            name="form-field-season"
            value={this.state.season}
            options={seasonOptions}
            onChange={this.selectedSeason}
            clearable={false}
            searchable={true}
          />
        <button type="button" id="saveEpisode" onClick={() => (this.updateProgressWatchList())} className="btn btn-primary btn-md">Save</button>
        </div>

        <div className="col-sm-6">
          <h6>Current Episode: </h6>
          <Select
            name="form-field-episode"
            value={this.state.episode}
            options={episodeOptions}
            onChange={this.selectedEpisode}
            clearable={false}
            searchable={true}
          />
        </div>

      </div>
    )
  }

    selectedSeason(season) {
        this.setState({
          season: season.value
        })
    }

    selectedEpisode(episode) {
        this.setState({
          episode: episode.value
        })
    }

    renderImage() {
      return (
        !this.props.show.show_details.content.image.medium ?
          <img src='http://placehold.it/210x295' className="center-block" role="presentation"/>
        :
        <div>
          <img src={this.props.show.show_details.content.image.medium} className="center-block" role="presentation"/>
        </div>
      )
  }

  renderSummary() {
    let summary = this.props.show.show_details.content.summary;
    if(summary.length > 475) {
      summary = summary.substring(0, 475) + '...';
    }
    return (
      <div dangerouslySetInnerHTML={{__html: summary}} ></div>
    )
  }

  render() {
    if(!this.props.episodesPerSeason) {
      return (
        <div className="container">
          <div className="row spinner-row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <Spinner id={0} spinnerName='circle' noFadeIn/>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      )
    }

    let show = this.props.show.show_details.content;

    return (
      <div className="well">
        <div className="row" id="myShowsRow">
          <div className="col-md-4">
            {this.renderImage()}

          </div>
          <div className="col-md-4">
            <h6>{show.name}</h6> { show.premiered ? <h6><small> {"(" + show.premiered.substring(0, 4) + ")"} </small></h6> : null }
            {this.renderSummary()}
            <Link className="btn btn-info" to={"/shows/"+ this.props.show.show_id}>View Details</Link>
          </div>
          <div className="col-md-4">
            {this.renderProgress()}
          </div>
          <button type="button" id="removeBtn" onClick={() => (this.removeShow())} className="btn btn-danger btn-md"> Remove Show</button>
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
