import React, { Component } from 'react';

class Show extends Component {
  constructor(props) {
    super(props)

    this.renderImage = this.renderImage.bind(this);
  }

   renderImage() {
    if(this.props.show.image) {
     return (
       <img src={this.props.show.image.medium} role="presentation" />
     )
   }
   else {
      return (
        <img src='http://placehold.it/210x295'/>
      )
    }
  }

  renderFigcaption() {
    return (
      <figcaption>
        <h4 className="rating">Rating: {this.props.show.rating.average} / 10</h4>

        <h4>{this.props.show.genres[0]}</h4>
        <h4>{this.props.show.genres[1]}</h4>
        <h4>{this.props.show.genres[2]}</h4>

        <div className="btn-group-vertical">
          <span className="btn btn-info">View Details</span>
          <span className="btn btn-primary">Add to Favorites</span>
        </div>

      </figcaption>
    )
  }


  render() {
    const showStyle = {
      padding: '20px',
    }

    return (
        <figure className="browse-show-wrap" style={showStyle}>
          {this.renderImage()}
          {this.renderFigcaption()}
        </figure>
    )
  }
};

export default Show;
