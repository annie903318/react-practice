import React, { Component,useState } from 'react';
import {CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

import ItemsCarousel from 'react-items-carousel';

import { Row,Col,Card,Menu } from "antd";
import "antd/dist/antd.css";

export default class CarouselWrap extends Component {
  state = {
    carousellist: [
      {
        src: "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
        name: "攝影",
        detail:"從攝影工作室的人物肖像到壯觀的高山風景，瀏覽現今最佳的攝影、修圖和新聞攝影"
      },
      {
        src: "https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519_960_720.jpg",
        name: "插圖",
        detail:"觀看各種形式的插圖作品，包括素描簿、壁畫、人物設計等等"
      },
      {
        src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        name: "動態",
        detail:"觀看令人驚艷的短片、動態圖形剪輯和樂趣無窮的 GIF 動畫"
      },
      {
        src: "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png",
        name: "建築",
        detail:"從居家裝潢到未來城市規劃，瀏覽現今最卓越的室內設計、建築攝影和示意圖"
      },
      {
        src: "https://cdn.pixabay.com/photo/2017/09/16/16/09/sea-2755908_960_720.jpg",
        name: "產品設計",
        detail:"瀏覽汽車、珠寶、玩具和工業設計等領域中的實際產品"
      },{
        src: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg",
        name: "時尚",
        detail:"探索現今時尚領域中的最新潮流，從髮型設計、服裝展示到流行彩妝。"
      },
      {
        src: "https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg",
        name: "美術",
        detail:"各式各樣最具創意的美術專案: 雕塑、繪畫、素描等等"
      },{
        src: "https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851_960_720.jpg",
        name: "工藝",
        detail:"探索頂尖工匠所製作的卓越工藝品，包括木工、陶藝和紙類作品"
      }
    ]
    
  }
  
  handleClick= e => {
    console.log(e.key);
  }

  // const {activeItemIndex, setActiveItemIndex} = useState(0);
  // const chevronWidth = 40;
  
  render() {
    const { carousellist } = this.state;


    return (
        <div className="CarouselWrap">
          <div >
            <Menu onClick={this.handleClick} mode="horizontal inline" theme="dark" style={{backgroundColor:"white"}}>
              {carousellist.map((item, index, array) => {
                return (
                  <Menu.Item key={item.name} >
                      <img
                          style={{width:200,height:80}}
                          alt={item.name}
                          src={item.src}
                      /> 
                  </Menu.Item>                  
                );
              })}
            </Menu>
            <h1 style={{textAlign:"center",fontSize:70}}>攝影</h1>
            <h1 style={{textAlign:"center"}}>從攝影工作室的人物肖像到壯觀的高山風景，瀏覽現今最佳的攝影、修圖和新聞攝影</h1>
          </div>

          {/* <ItemsCarousel
        infiniteLoop
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={8}
        leftChevron={<button><CaretLeftOutlined/></button>}
        rightChevron={<button><CaretRightOutlined/></button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ width:200,height:80, background: '#EEE' }}>First card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>Second card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>Third card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>Fourth card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>First card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>Second card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>Third card</div>
        <div style={{ width:200,height:80, background: '#EEE' }}>Fourth card</div>
      </ItemsCarousel>
                 */}
        
        </div >
    );
  }
}
