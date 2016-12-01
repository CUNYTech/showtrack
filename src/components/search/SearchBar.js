import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <form style={formStyle} onSubmit={this.onFormSubmit} className="input-group" id="search-field">
        <input
          type="search"
          required
          placeholder="Search your TV shows!"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-default">Submit</button>
        </span>
      </form>
    );
  }
}

export default connect(null, { searchShows })(SearchBar);
