import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Accordion from './Accordion';
import EpisodeDetail from './EpisodeDetail';

class ShowDetail extends Component {
 constructor(props) {
   super(props)

   this.renderGenres = this.renderGenres.bind(this);
 }

componentWillMount() {
  this.props.resetShow();
  this.props.fetchShow(this.props.params.id);
  this.props.fetchEpisodes(this.props.params.id);
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

renderEpisodeDetails(episodes){
  console.log(episodes.data.length);
  let episodeDetails = episodes.map((x) => {
    return(
      <div key={x.id}>
        <h2>{x.name}</h2>
        <img src={x.image ? x.image.medium : 'http://placehold.it/250x140'} className="img-responsive" alt={episodes.name} />
        <div> Number: {x.number} Season: {x.season}</div>
        <p dangerouslySetInnerHTML={{__html: x.summary}} ></p>
      </div>
    )
  });
  return episodeDetails;
}
render() {
  const { show, episodes } = this.props;
    if (!show) {
      return (
        <div>Loading...</div>
      )
    }

    {/*title: "Test One",
    content: `Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.`,*/}


  // let episodeData = null;
  // for(var i = 0; i < episodes.length; i++){
  //   episodeData[i] = episodes[i].season;
  // }

  let episodeData = episodes.map((x) => {
    return {title:x.season, content:<div>{x.name}</div>};
  });

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


      <div>{this.renderEpisodeDetails(episodes)}</div>

      <Accordion data={episodeData}/>
      <EpisodeDetail/>
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
