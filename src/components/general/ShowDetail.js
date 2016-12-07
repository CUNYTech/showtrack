import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Accordion from './Accordion';
import EpisodeDetail from './EpisodeDetail';
import Spinner from 'react-spinkit';

class ShowDetail extends Component {
 constructor(props) {
   super(props)

   this.renderGenres = this.renderGenres.bind(this);
 }

  componentWillMount() {
    this.props.fetchShow(this.props.params.id);
    this.props.fetchEpisodes(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.resetShow();
    this.props.resetEpisodes();
  }

  renderGenres(show) {
    const genres = show.genres;
    let genreListing = null;
    if (genres.length > 0) {
      genreListing = genres.map(genre => {
        return (
            <span key={genre}>{genre} </span>
        )
      })
    }
    return genreListing;
  }

  renderEpisodeData(episodes){
    console.log(episodes);
    var episodeData = [];
    var totalSeasons = episodes[episodes.length - 1].season;
    for(var i = 1;i <= totalSeasons; i++) {
      var seasonDetails = {title: `season ${i}`, content: []};
      var seasonContents = episodes.filter(function(episode) {
        return episode.season === i;
      });
      var episodeContent = seasonContents.map( (x) => {
        return(
          <div key={x.id} className="row accordion-episode">
            <div className="col-sm-3">
              <img src={x.image ? x.image.medium : 'http://placehold.it/250x140'} className="img-responsive" alt={episodes.name} />
            </div>
            <div className="col-xs-6">
              <h5>{x.number}. {x.name}</h5> <p> Aired: {x.airdate}</p>
              <p dangerouslySetInnerHTML={{__html: x.summary}} ></p>
            </div>
          </div>
        )
      });
      seasonDetails.content = [...episodeContent];
      episodeData.push(seasonDetails);
    }
    return episodeData;
  }


  render() {

    const { show, episodes } = this.props;
    if (!show && !episodes) {
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



    return (
      <div className="container">
        <div className="row">
          <h2 className="col-sm-12">{show.name}</h2>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <img src={show.image.original} className="img-responsive" alt={show.name} />
          </div>
          <div className="col-sm-6">
            <p dangerouslySetInnerHTML={{__html: show.summary}} className="font-weight-normal font-italic"></p>
            <div className="text-right">
              <div className="social-buttons">
                <div>Share this on:</div>
                <a id="facebook" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.tvmaze.com%2Fshows%2F73%2F{show.name}" title="facebook"><i className="fa fa-facebook-square fa-2x"></i></a>
                <a id="twitter" target="_blank" href="https://twitter.com/home?status=http%3A%2F%2Fwww.tvmaze.com%2Fshows%2F73%2F{show.name}" title="twitter"><i className="fa fa-twitter-square fa-2x"></i></a>
                <a id="reddit" target="_blank" href="//www.reddit.com/submit?url=http%3A%2F%2Fwww.tvmaze.com%2Fshows%2F73%2F{show.name}" title="reddit"><i className="fa fa-reddit-square fa-2x"></i></a>
                <a id="tumblr" target="_blank" href="http://www.tumblr.com/share/link?url=http%3A%2F%2Fwww.tvmaze.com%2Fshows%2F73%2F{show.name}" title="tumblr"><i className="fa fa-tumblr-square fa-2x"></i></a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <h3>Show Info</h3>
            <div>Airs on: {show.network.country.code} {show.network.name} ({show.premiered})</div>
            <div>Scheduled: {show.schedule.days[0]} at {show.schedule.time}</div>
            <div>Status: {show.status}</div>
            <div>Show Type: {show.type}</div>
            <div>Genres: {this.renderGenres(show)}</div>
            <div>Episodes ordered: {show.type}</div>
            <br />
            <div>Rating: {show.rating.average || 0}/10</div>
          </div>
        </div>

        <div className="row">
          <Accordion data={this.renderEpisodeData(episodes)}/>

        </div> {/*row*/}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    show: state.search.show,
    episodes: state.show.episodes
  }
}

export default connect(mapStateToProps, actions) (ShowDetail);
