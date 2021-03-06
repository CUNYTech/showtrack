import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import WatchListElement from './WatchListElement';
import * as actions from '../../actions';
import Spinner from 'react-spinkit';

class MyList extends Component {

  componentWillMount() {
    this.props.fetchWatchList();
  }
  componentDidMount(){
    var x = document.getElementById("my-shows");
    x.className += " current-location";
  }
  componentWillUnmount(){
    var x = document.getElementById("my-shows");
    x.className = x.className.replace(" current-location", "");
  }

  renderWatchList() {
    let watchList = this.props.watchList;

    let list = (null);
    let listItems = (<span>No shows were found!</span>);

    if (watchList.length > 0) {
      list = watchList.map(show => {
        return (
          <div key={show.show_id}>
            <WatchListElement show={show}/>
          </div>);
      });
    }
    else (
      list = (
        <div className="jumbotron text-center">
          <h1>You do not have any shows!</h1>
          <p>Search for shows <Link to='/search'>here</Link> to add to your list and start keeping track of what you are up to!</p>
        </div>
      )
    )
    return list;
  }

  render() {
    return (
      !this.props.watchList ?
        <div className="container">
          <div className="row">
            <div className="col-sm-4"></div>
            <Spinner id={0} spinnerName='three-bounce' noFadeIn className="col-sm-4"/>
            <div className="col-sm-4"></div>
          </div>
        </div>
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
