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
            <Show show={show} />
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
            <Show show={show} image={show.poster_img}/>
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
      speed: 900,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
          }
        }
      ]
    };



    var lineStyle = {
      padding: '20x'
    }

    return (
        <div className="container">
          {/*<div className="row">
            <h3 className="sliderHeader">Popular Shows</h3>
            <div>
              {!this.props.popularShows ? (
                <div className="container">
                  <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                      <Spinner id={0} spinnerName='three-bounce' noFadeIn/>
                    </div>
                    <div className="col-sm-4"></div>
                  </div>
                </div>
              ) : (
                <div>
                  <Slider {...settings}>
                    {this.renderPopularShows() || <div></div>}
                  </Slider>
                </div>
                )
              }
            </div>
          </div>*/}

          <div className="row">
            <h4 className="sliderHeader">Trending Shows</h4>
            <div>
              {!this.props.trendingShows ? (
                <div className="container">
                  <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                      <Spinner id={0} spinnerName='three-bounce' noFadeIn/>
                    </div>
                    <div className="col-sm-4"></div>
                  </div>
                </div>
              ) : (
                <div>
                    <Slider {...settings}>
                        {this.renderTrendingShows() || <div></div>}
                    </Slider>
                </div>
              )
              }
            </div>
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
