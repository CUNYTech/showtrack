import React, { Component } from 'react';
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
    if (showProps.length > 0) {
      shows = showProps.map(show => {
        return (
          <Show show={show.show}
            key={show.show.id} />);
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
