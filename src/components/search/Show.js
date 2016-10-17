import React, { Component } from 'react';

class Show extends Component {
  constructor(props) {
    super(props)

    this.renderImage = this.renderImage.bind(this);
  }

   renderImage() {
    if(this.props.show.image) {
     return (
       <img src={this.props.show.image.medium} role="presentation" />
     )
   }
   else {
      return (
        <img src='http://placehold.it/210x295'/>
      )
    }
  }

  render() {
    const showStyle = {
      padding: '20px',
    }

    return (
      <div style={showStyle}>
        {this.renderImage()}
      </div>
    )
  }
};

export default Show;
