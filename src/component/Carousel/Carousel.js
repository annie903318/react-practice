import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import { Button } from "antd";


export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next = () => {
    this.slider.slickNext();
  }
  previous = () => {
    this.slider.slickPrev();
  }

  render() {

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      focusOnSelect: true,
    };
    
    return (
      <div className="carousel">
        <div>
          <Button className="prev" onClick={this.previous}> 	&lt; </Button>
          <Button className="next" onClick={this.next}> 	&gt; </Button>
        </div>

        <Slider ref={c => (this.slider = c)} {...settings}>
          <div>
            <img className="imgbottom" alt="1" src="https://cdn.pixabay.com/photo/2013/03/23/23/10/brush-96240__340.jpg" />
            <div className="imgtop">插圖</div>
          </div>
          <div>
            <img className="imgbottom" alt="2" src="https://cdn.pixabay.com/photo/2016/01/13/22/48/pottery-1139047__340.jpg" />
            <div className="imgtop">攝影</div>
          </div>
          <div>
            <img className="imgbottom" alt="3" src="https://cdn.pixabay.com/photo/2016/08/23/13/12/knitting-1614283__340.jpg" />
            <div className="imgtop">動態</div>
          </div>
          <div>
            <img className="imgbottom" alt="4" src="https://cdn.pixabay.com/photo/2015/04/20/13/45/wool-731515__340.jpg" />
            <div className="imgtop">平面設計</div>
          </div>
          <div>
            <img className="imgbottom" alt="5" src="https://cdn.pixabay.com/photo/2014/11/29/17/57/forge-550622__340.jpg" />
            <div className="imgtop">建築</div>
          </div>
          <div>
            <img className="imgbottom" alt="6" src="https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091__340.jpg" />
            <div className="imgtop">產品設計</div>
          </div>
          <div>
            <img className="imgbottom" alt="7" src="https://cdn.pixabay.com/photo/2017/08/03/21/11/art-2578353__340.jpg" />
            <div className="imgtop">時尚</div>
          </div>
          <div>
            <img className="imgbottom" alt="8" src="https://cdn.pixabay.com/photo/2019/10/20/16/57/loom-4564223__340.jpg" />
            <div className="imgtop">美術</div>
          </div>
        </Slider>
      </div>
    );
  }
}