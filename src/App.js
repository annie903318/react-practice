import React, { Component } from 'react';
import './App.css';
import { Layout,Divider,Row,Col } from "antd";
import "antd/dist/antd.css";
import Selection from './component/Selection';
import Navbar from './component/Navbar';
import Searchbar from './component/Searchbar';
import CarouselWrap from './component/CarouselWrap';
import Test from './component/Test';

const { Header, Content } = Layout;

export default class App extends Component {
  state = {
    selectionlist: [
      {
        src: "https://cdn.pixabay.com/photo/2019/03/13/22/51/pet-4053938_1280.jpg",
        name: "Mary",
        like: 527,
        view: 3.5
      },
      {
        src: "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg",
        name: "Harris",
        like: 249,
        view: 1.8
      },
      {
        src: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
        name: "Michael",
        like: 459,
        view: 4.2
      },
      {
        src: "https://cdn.pixabay.com/photo/2016/02/22/10/06/hedgehog-1215140_1280.jpg",
        name: "Geo",
        like: 538,
        view: 4.3
      },
      {
        src: "https://cdn.pixabay.com/photo/2017/04/30/18/33/cat-2273598_1280.jpg",
        name: "Cindy",
        like: 527,
        view: 3.5
      },{
        src: "https://cdn.pixabay.com/photo/2019/03/13/22/51/pet-4053938_1280.jpg",
        name: "Mary",
        like: 527,
        view: 3.5
      },
      {
        src: "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg",
        name: "Harris",
        like: 249,
        view: 1.8
      },
      {
        src: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
        name: "Michael",
        like: 459,
        view: 4.2
      }
    ]
    
  };

  
  render() {
    const { selectionlist } = this.state;

    return (
      <Layout className="layout" >
        <Header style={{backgroundColor:"white"}}>
          <Navbar/>
        </Header>
        
        <Content style={{ padding: '0 50px',backgroundColor:"white"}}>
          <Test/>
          <CarouselWrap/>
          <Divider style={{ color: "#d8d8d8" }}/>
          <Searchbar/>
          <Divider style={{ color: "#d8d8d8" }}/>

          <div >
            <Row gutter={[24,24]} style={{margin:"auto"}}>
              {selectionlist.map((item, index, array) => {
                return (
                  <Col span={6}>
                    <Selection selsrc={item.src} selname={item.name} sellike={item.like} selview={item.view} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Content>
      </Layout>


      

    );
  }

}
