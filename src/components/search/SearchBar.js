import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchShows } from '../../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.searchShows(this.state.term);
  }

  render() {

    const formStyle = {
      width: 'auto'
    }
    return (
      <form style={formStyle} onSubmit={this.onFormSubmit} className="input-group">
        <input
          type="search"
          required
          placeholder="Search your TV shows!"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchShows }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
