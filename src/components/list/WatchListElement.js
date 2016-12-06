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
      <div>
        <Select
            name="form-field-season"
            value={this.state.season}
            options={seasonOptions}
            onChange={this.selectedSeason}
            className="col-md-2"
            clearable={false}
            searchable={true}
        />
        <Select
          name="form-field-episode"
          value={this.state.episode}
          options={episodeOptions}
          onChange={this.selectedEpisode}
          className="col-md-2"
          clearable={false}
          searchable={true}
        />
      <button type="button" onClick={() => (this.updateProgressWatchList())} className="btn btn-default btn-md"> Save </button>
      <button type="button" onClick={() => (this.removeShow())} className="btn btn-danger btn-md"> Remove </button>

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

  renderSummary() {
    let summary = this.props.show.show_details.content.summary;
    if(summary.length > 400) {
      summary = summary.substring(0, 400) + '...';
    }
    return (
      <p className="col-md-6" dangerouslySetInnerHTML={{__html: summary}}></p>
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
        <div className="row" style={{ marginBottom: 10 }}>
          <h4 className="col-md-6 text-center">{show.name}</h4>
        </div>
        <div className="row">
            <div className="col-md-6 text-center">{this.renderImage()}</div>
            {this.renderSummary()}
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
