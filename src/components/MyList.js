import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MyList extends Component {

  componentWillMount() {
      this.props.fetchWatchList();
  }

  renderWatchList() {
      console.log('watchlist',this.props.watchList);
      return (
        <div>test</div>
      );
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
