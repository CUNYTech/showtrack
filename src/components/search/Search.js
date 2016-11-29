import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SearchBar from './SearchBar';
import ShowListing from './ShowListing';

class Search extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ShowListing shows={this.props.searchResults} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.search.searchResults
  }
}

export default connect(mapStateToProps, actions)(Search);
