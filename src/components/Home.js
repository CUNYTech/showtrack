import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Slider from 'react-slick';
import MultipleItems from 'react-slick';


class Home extends Component {
  componentWillMount() {
    //this.props.fetchMessage();
  }

  


  render() {
    return (
      <div className='container'>
        <Slider>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>

      </div>
    )
  }



}

export default connect(null, actions)(Home);
