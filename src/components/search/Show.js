import React, { Component } from 'react';
import { Link } from 'react-router';
<<<<<<< HEAD
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
=======
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
>>>>>>> f2d3c3ccd36f62257eb3f1e7f91ae18dd625f1cf

class Show extends Component {
  constructor(props) {
    super(props)

    this.renderImage = this.renderImage.bind(this);
    this.addToWatchList = this.addToWatchList.bind(this);

<<<<<<< HEAD
=======
  }

  addToWatchList = () => {
     this.props.addToWatchList(this.props.show);

>>>>>>> f2d3c3ccd36f62257eb3f1e7f91ae18dd625f1cf
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

  addToWatchList(show) {
    console.log(show);
    this.props.addToWatchList(show);
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
<<<<<<< HEAD
            <span className="btn btn-primary" onClick={() => (this.addToWatchList(this.props.show))}>Add to my shows</span>
=======
            <span className="btn btn-primary" onClick={ this.addToWatchList }  >Add to my shows</span>
>>>>>>> f2d3c3ccd36f62257eb3f1e7f91ae18dd625f1cf
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
      </div>
    )
  }
};

<<<<<<< HEAD
export default connect(null, actions)(Show);
=======
export default connect(null, actions) (Show);
>>>>>>> f2d3c3ccd36f62257eb3f1e7f91ae18dd625f1cf
