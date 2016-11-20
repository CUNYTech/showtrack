import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Show from './search/Show';
import Slider from 'react-slick';
import Spinner from 'react-spinkit';
import Accordion from './general/Accordion';

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
          <div key={show.id}>
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
          <div key={show.id}>
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

    var titleStyle = {
      color: 'white',
      fontSize: '30px',
      paddingBottom: '20px'
    };

    var lineStyle = {
      padding: '20x'
    }

    return (
        <div>
          <h3 className="text-center" style={titleStyle}>Popular Shows</h3>
          <div>
            {!this.props.popularShows ? (
              <div className="container">
                <div className="row">
                  <div className="col-sm-4"></div>
                  <Spinner id={0} spinnerName='three-bounce' className=".col-sm-4"/>
                  <div className="col-sm-4"></div>
                </div>
              </div>
            ) : (
              <div>
                <Slider {...settings}>
                  {this.renderPopularShows()}
                </Slider>
              </div>
              )
            }
          </div>

          <hr style={lineStyle}></hr>

          <h3 className="text-center" style={titleStyle}>Trending Shows</h3>
          <div>
            {!this.props.trendingShows ? (
              <div className="container">
                <div className="row">
                  <div className="col-sm-4"></div>
                  <Spinner id={0} spinnerName='three-bounce' className=".col-sm-4"/>
                  <div className="col-sm-4"></div>
                </div>
              </div>
            ) : (
              <div>
                  <Slider {...settings}>
                      {this.renderTrendingShows()}
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
