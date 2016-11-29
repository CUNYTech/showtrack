import React, { Component } from 'react';
import { connect } from 'react-redux';
import WatchListElement from './WatchListElement';

import * as actions from '../../actions';

class MyList extends Component {

  componentWillMount() {
    this.props.fetchWatchList();
  }

  renderWatchList() {
    let watchList = this.props.watchList;

    let list = null;
    let listItems = (<span>No shows were found!</span>);

    if (watchList.length > 0) {
      list = watchList.map(show => {
        return (
          <div key={show.show_id}>
            <WatchListElement show={show}/>
          </div>);
      });
    }
    return list;
  }

  render() {
    return (
      !this.props.watchList ?
        <div>No watchlist!</div>
      :
      <div>
        {this.renderWatchList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    watchList: state.show.watchList
  }
}

export default connect(mapStateToProps, actions)(MyList);
