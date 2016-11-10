import React, { Component } from 'react';
import { Link } from 'react-router';

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

  renderNameAndYear(){
    return(
      <div id="browse-show-bottom">
        <h6>{this.props.show.name} <small>{this.props.show.premiered}</small></h6>
      </div>
      )
  }

  renderFigcaption() {
    return (
      <figcaption>
        <h4 className="rating">Rating: {this.props.show.rating.average} / 10</h4>

        <h5>{this.props.show.genres[0]}</h5>
        <h5>{this.props.show.genres[1]}</h5>

        <div className="btn-group-vertical">
            <Link className="btn btn-info" to={"shows/" + this.props.show.id}>
                View Details
            </Link>
            <span className="btn btn-primary">Add to my shows</span>
        </div>

      </figcaption>
    )
  }


  render() {
    const showStyle = {
      padding: '20px',
    }

    return (
      <div>
        <figure className="browse-show-wrap" style={showStyle}>
          {this.renderImage()}
          {this.renderFigcaption()}
        </figure>
        {/*this.renderNameAndYear()*/}
      </div>
    )
  }
};

export default Show;
