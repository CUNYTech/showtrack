import React, { Component } from 'react';
import { Link } from 'react-router';
import Show from './Show';

class ShowListing extends Component {
  constructor(props) {
    super(props);
  }

  renderShows() {
    let showProps = this.props.shows;
    let shows = null;
    let showItems = (<span>No shows were found!</span>);

    if (showProps.length > 0) {
      shows = showProps.map(show => {
        return (
          <div key={show.id} className="browse-show-wrap">
            <Show show={show.show} />
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
