import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class ShowDetail extends Component {
 constructor(props) {
   super(props)

   this.renderGenres = this.renderGenres.bind(this);
 }

componentWillMount() {
    this.props.resetShow();
    this.props.fetchShow(this.props.params.id);
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
    const { show } = this.props;


    if (!show) {
      return (
        <div>Loading...</div>
      )
    }
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
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      show: state.search.show
    }
}

export default connect(mapStateToProps, actions) (ShowDetail);
