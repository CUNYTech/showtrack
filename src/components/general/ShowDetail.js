import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Accordion from './Accordion';

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

render() {
  const { show, episodes } = this.props;
    if (!show) {
      return (
        <div>Loading...</div>
      )
    }

  let data = [
    {
      title: "Test One",
      content: `Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt
                mollit anim id est laborum.`,
    }, {
      title: "Two",
      content: `Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt
                mollit anim id est laborum.`,
    },{
      title: "Test Three",
      content: `Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt
                mollit anim id est laborum.`,
    }
  ];

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
      <div className="row" id="next-episode-widget">
        <header className="col-sm-12 columns">
          <h2>Next Episode</h2>
        </header>
        <div className="col-sm-12 columns">
          <time datetime="2016-11-20" className="icon pull-left">
            <strong>Nov</strong>
            <span>20</span>
            <em>Sun</em>
          </time>
          <div className="header-wrap">
            <h3>
              <a href="/episodes/895794/the-walking-dead-7x03-the-cell">The Cell</a>
            </h3>
            <h4>
              Episode 7x05; Nov 20, 2016
            </h4>
          </div>
          <p>A new group of survivors seem to have it all in their impressive community; however, there is a price.</p>
          <a href="/videos/5480/the-walking-dead-7x03-the-cell-trailer"><i class="fa fa-film fa-lg"></i> Watch Trailer</a>
        </div>
      </div>
      <div class="row">
        <section class="small-12 medium-12 large-10 columns left" id="episode-list-short">
          <h2>Previous Episodes</h2>
          <div id="w0" class="grid-view">
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Episode Name</th>
                  <th>Airdate</th>
                  <th>Trailer</th>
                </tr>
              </thead>
              <tbody>
                <tr data-key="895795"><td>7x04: <a href="/episodes/895795/the-walking-dead-7x04-service">Service</a></td><td>Nov 13, 2016</td><td></td></tr>
                <tr data-key="895794"><td>7x03: <a href="/episodes/895794/the-walking-dead-7x03-the-cell">The Cell</a></td><td>Nov 6, 2016</td><td><a class="fa fa-film fa-lg" href="/videos/5480/the-walking-dead-7x03-the-cell-trailer"></a></td></tr>
                <tr data-key="895793"><td>7x02: <a href="/episodes/895793/the-walking-dead-7x02-the-well">The Well</a></td><td>Oct 30, 2016</td><td><a class="fa fa-film fa-lg" href="/videos/5385/the-walking-dead-7x02-the-well-trailer"></a></td></tr>
              </tbody>
            </table>
          </div>
          <a href="/shows/73/the-walking-dead/episodes">View full episode list »</a>
        </section>
      </div>
      <Accordion data={data}/>
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
