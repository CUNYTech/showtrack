import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
  componentWillMount() {
    //this.props.fetchWatchList();
  }
  render() {
    const { watchList } = this.props;

    console.log('props', this.props.watchList);

    if (!watchList) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div>
          Show watchlist
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { watchList: state.user.list }
}

export default connect(mapStateToProps, actions)(Home);
