import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShow } from '../../actions/index';

class ShowDetail extends Component {

  componentWillMount() {
    this.props.fetchShow(this.props.params.id);
  }
  render() {
    const { show } = this.props;

    console.log('props', this.props.show);

    if (!show) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div>
          { show.id }
          { show.name }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    show: state.search.show
  }
}

export default connect(mapStateToProps, { fetchShow }) (ShowDetail);
