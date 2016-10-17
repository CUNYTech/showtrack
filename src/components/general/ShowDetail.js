import React, { Component } from 'react';

class ShowDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <div> Post asdijasdknjasdknj{this.props.params.id} </div>
    )
  }
}

export default ShowDetail;
