import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MyList extends Component {

  componentWillMount() {
      this.props.fetchWatchList();
  }

  renderWatchList() {
      let watchList = this.props.watchList;

      let list = null;
      let listItems = (<span>No shows were found!</span>);

      if (watchList.length > 0) {
        list = watchList.map(item => {
          return (
            <div key={item.id}>
              {item.show_id}
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
