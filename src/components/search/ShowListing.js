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
          </div>);
      });
    }
    return shows;
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
