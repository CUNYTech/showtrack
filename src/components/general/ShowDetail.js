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
  this.props.fetchShow(this.props.params.id);
  this.props.fetchEpisodes(this.props.params.id);
}

renderGenres(show) {
  const genres = show.genres;
  let genreListing = null;
  if (genres.length > 0) {
    genreListing = genres.map(genre => {
      return (
        <div>
          <span key={genre}>{genre}</span>
        </div>
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
        <div className="col-xs-12 col-sm-4 col-md-6 col-lg-6">
          <img src={show.image.original} className="img-responsive" alt={show.name} />
        </div>
        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-6">
          <h3>{show.name}</h3>
          <br />
          <p dangerouslySetInnerHTML={{__html: show.summary}} className="font-weight-normal font-italic"></p>
          {this.renderGenres(show)}
          <div className="text-xs-center rating">Rating: {show.rating.average || 0}/10</div>
        </div>
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
