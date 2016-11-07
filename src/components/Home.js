import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Slider from 'react-slick';

//import { searchShows } from '../../actions/index';
//var Slider = require('react-slick');
//import MultipleItems from 'react-slick';


class Home extends Component {
  componentWillMount() {
    //this.props.fetchMessage();
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <Slider {...settings}>
          <div><img src='http://tvmazecdn.com/uploads/images/medium_portrait/79/198046.jpg' /></div>
          <div><img src='http://tvmazecdn.com/uploads/images/medium_portrait/79/198046.jpg' /></div>
          <div><img src='http://tvmazecdn.com/uploads/images/medium_portrait/79/198046.jpg' /></div>
        </Slider>

        <Slider {...settings}>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>

        <Slider {...settings}>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>
      </div>



    );
  }
}

export default connect(null, actions)(Home);
