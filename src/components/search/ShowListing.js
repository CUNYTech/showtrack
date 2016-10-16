import React, { Component } from 'react';
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
          <Show show={show}
            key={show.show.ids.tvdb} />);
      });
    }
    return shows;
  }

  render() {
    console.log(this.props.shows);

    return (
       !this.props.shows ?
           <div>Loading...</div>
       :
           <div>{this.renderShows()}</div>
   )
  }
}

export default ShowListing
