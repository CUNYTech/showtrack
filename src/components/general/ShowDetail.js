import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShow } from '../../actions/index';

class ShowDetail extends Component {

  componentWillMount() {
    this.props.fetchShow(this.props.params.id);
  }

  renderGenres(show) {
    const genres = show.genres;
    if (genres.length > 0) {
      genres.map(genre => {
        return (
          <span key={genre}>{genre}</span>
        )
      })
    }
  }

  render() {
    const { show } = this.props;

    console.log('props', this.props.show);

    if (!show) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <img src={show.image.original} className="img-fluid" alt={show.name} />
            <div className="text-xs-center rating">Rating: {show.rating.average || 0}/10</div>
          </div>
          <div className="col-xs-12 col-sm-8">
            <h3>{show.name}</h3>
            <br />
            <p className="font-weight-normal font-italic">{show.summary}</p>
            {this.renderGenres(show)}
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

export default connect(mapStateToProps, { fetchShow }) (ShowDetail);
