import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';



class Show extends Component {
  constructor(props) {
    super(props)

    this.renderImage = this.renderImage.bind(this);
    this.addToWatchList = this.addToWatchList.bind(this);
  }


  addToWatchList = () => {
    this.props.addToWatchList(this.props.show);

    var x = document.getElementById("snackbarShowAdded");
    x.className += " show";
    setTimeout(function(){ x.className = x.className.replace(" show", ""); }, 3000);

  }

  addToWatchList(show) {
    this.props.addToWatchList(show);
  }



   renderImage() {
    if(this.props.show.image) {
     return (
       <img src={this.props.show.image.medium} role="presentation" />
     )
   }
   else if(this.props.image) {
     return (
       <img src={this.props.image} width='210' height='295' role="presentation"/>
     )
   }
   else {
      return (
        <img src='http://placehold.it/210x295' role="presentation"/>
      )
    }
  }

  renderFigcaption() {
    if (this.props.authenticated){
      return (
        <figcaption>
          {
            (this.props.show.rating)
            ? <h4 className="rating">Rating: {this.props.show.rating.average} / 10 </h4>
            : null
          }

          {
            (this.props.show.genres)
            ? <h5>{this.props.show.genres[0]}</h5>
            : null
          }

          <div className="btn-group-vertical">
              <Link className="btn btn-info" to={"shows/" + this.props.show.id}>
                  View Details
              </Link>
              <span className="btn btn-primary" onClick={() => (this.addToWatchList(this.props.show))}>Add to my shows</span>
          </div>

        </figcaption>
      )
    }
    else{
      return(
        <figcaption>
          <h4 className="rating">Please Log In</h4>
        </figcaption>
      )

    }
  }


  render() {
    let { show } = this.props;

    const showStyle = {
      padding: '20px',
    }
    var promptLogin = () =>{
      var x = document.getElementById("snackbarLoginPrompt");
      x.className += " show";
      setTimeout(function(){ x.className = x.className.replace(" show", ""); }, 3000);
    };

    if (this.props.authenticated){
      return (
        <div>
          <figure className="browse-show-wrap" style={showStyle}>
            <Link to={"shows/" + this.props.show.id}>
              {this.renderImage()}
            </Link>
            {this.renderFigcaption()}
          </figure>
          <div id="browse-show-bottom">
            <h6>{show.name}</h6>
            { show.premiered ? <h6><small> {"(" + show.premiered.substring(0, 4) + ")"} </small></h6> : null }
          </div>
        </div>
      )
    }
    else{
      return (
        <div>
          <figure className="browse-show-wrap" style={showStyle}>
            <Link onClick={promptLogin}>
              {this.renderImage()}
            </Link>
            {this.renderFigcaption()}
          </figure>
          <div id="browse-show-bottom">
            <h6>{show.name}</h6>
            { show.premiered ? <h6><small> {"(" + show.premiered.substring(0, 4) + ")"} </small></h6> : null }
          </div>
        </div>
      )
    }
  }
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, actions)(Show);
