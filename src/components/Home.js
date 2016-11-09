import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Show from './search/Show';
import Slider from 'react-slick';
import Spinner from 'react-spinkit';

//import { searchShows } from '../../actions/index';
//var Slider = require('react-slick');
//import MultipleItems from 'react-slick';


class Home extends Component {
  componentWillMount() {
    this.props.fetchTrendingShows();
    this.props.fetchPopularShows();
  }
  renderTrendingShows() {
    let showProps = this.props.trendingShows;
    let shows = null;
    let showItems = (<span>No shows were found!</span>);
    if(showProps.length > 0) {
        shows = showProps.map(show => {
            return (
                <div id={show.id}>
                    <img src={show.image.medium}></img>
                </div>
            )
        });
    }
    return shows;
  }

  renderPopularShows() {
    let showProps = this.props.popularShows;
    let shows = null;
    let showItems = (<span>No shows were found!</span>);
    if(showProps.length > 0) {
        shows = showProps.map(show => {
            return (
                <div id={show.id}>
                    <img height="295" width="210" src={show.poster_img}></img>
                </div>
            )
        });
    }
    return shows;
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
            <div>
            {!this.props.trendingShows ? (
                <Spinner id={0} spinnerName='double-bounce' />
        ) : (
            <div>
                <h2>Currently Trending Shows</h2>
                <Slider {...settings}>
                    {this.renderTrendingShows()}
                </Slider>
            </div>
            )
        }
            </div>

            <hr></hr>

            <div>
                {!this.props.popularShows ? (
                    <Spinner id={1} spinnerName='double-bounce' />
            ) : (
                <div>
                    <h2>Currently Popular Shows</h2>

                    <Slider {...settings}>
                        {this.renderPopularShows()}
                    </Slider>
                </div>
            )
        }
            </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        trendingShows: state.show.trendingShows,
        popularShows: state.show.popularShows
    }
}

export default connect(mapStateToProps, actions)(Home);
