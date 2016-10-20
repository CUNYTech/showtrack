import React, { Component } from 'react';
import { Link } from 'react-router';

import Show from './Show';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ShowListing extends Component {
  constructor(props) {
    super(props);
  }

  renderShows() {
    let showProps = this.props.shows;
    let shows = null;
    let showItems = (<span>No shows were found!</span>);
    console.log(this.props.shows);
    if (showProps.length > 0) {
      shows = showProps.map(show => {
        return (
          <div className="browse-show-wrap">
            <Link key={show.show.id} to={"shows/" + show.show.id}>
              <Show show={show.show} />
            </Link>
            <div id="browse-show-bottom">
              <h6>{show.show.name} </h6>
              {/*<h6><small> {show.show.premiered.substring(0, 4)} </small></h6>*/}
              { show.show.premiered ? <h6><small> {"(" + show.show.premiered.substring(0, 4) + ")"} </small></h6> : null }
            </div>
          </div>);
      });
    }
    return shows;
  }

  renderNameAndYear(){
    return(
      <div id="browse-show-bottom">
        {<h6>{this.props.show.name} <small>{this.props.show.premiered}</small></h6>}
      </div>
      )
  }

  render() {

    const listingStyle = {
      display: "flex",
      flexDirection: "row",
      background: "aliceblue",
      margin: "20px",
      flexWrap: "wrap",
      justifyContent: "space-around"
    }

    return (
      !this.props.shows ?
        <div></div>
      :
      <div style={listingStyle}>
        {this.renderShows()}
      </div>
    )
  }
}

export default ShowListing
