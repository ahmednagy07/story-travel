import React, { Component } from "react";
import Slider from "react-slick";
import asia from '../assets/asia.png';
import ksa from '../assets/ksa.png';
import costa from '../assets/costa.png';
import etihad from '../assets/etihad.png';
import hilton from '../assets/hilton.png';
import inter from '../assets/inter.png';
import kwt from '../assets/kwt.png';
import jazeera from '../assets/jazeera.png';
import MSC from '../assets/MSC.png';
import marriott from '../assets/marriott.png';
import norwegian from '../assets/NCL.png';
import emarites from '../assets/emarites.png';
import turkish from '../assets/turkish.png';
import uk from '../assets/uk.png';
import wyndham from '../assets/wyndham.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const containerStyle = {
    textAlign: 'center',
    marginBottom: '100px',
    marginTop: '8rem',
  };

  const sliderItemStyle = {
    display: 'inline-block',
    margin: '0 10px',
  };

  const imageStyle = {
    width: '120px',
    height: '50px',
    margin: '0 35px',
  };

  const headingStyle = {
    marginBottom: '50px',
    color: '#225377',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>شركاء النجاح</h1>
      <Slider {...settings}>
        <div style={sliderItemStyle}>
          <img src={asia} alt="Asia" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={ksa} alt="ksa" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={costa} alt="costa" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={etihad} alt="etihad" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={hilton} alt="hilton" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={inter} alt="inter" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={kwt} alt="kwt" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={jazeera} alt="jazeera" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={MSC} alt="MSC" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={marriott} alt="marriott" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={norwegian} alt="norwegian" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={emarites} alt="emarites" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={turkish} alt="turkish" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={uk} alt="uk" style={imageStyle} />
        </div>
        <div style={sliderItemStyle}>
          <img src={wyndham} alt="wyndham" style={imageStyle} />
        </div>
      </Slider>
    </div>
  );
  }
}
