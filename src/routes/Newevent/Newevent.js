import React, { Component } from 'react';
import { Layout,Divider,Row,Col } from "antd";
import "antd/dist/antd.css";
import Navbar from '../../component/Navbar/Navbar';
import Selection from '../../component/Selection/Selection';
import "./Newevent.css";

const { Header, Content } = Layout;

export default class Newevent extends Component {
    state = {
        speciallist: [
          {
            src: "https://cdn.pixabay.com/photo/2019/01/28/16/06/breakfast-table-3960761__340.jpg",
            name: "Mary",
            like: 527,
            view: 3.5
          },
          {
            src: "https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091__340.jpg",
            name: "Harris",
            like: 249,
            view: 1.8
          },
          {
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c61c6598036463.5ed32d44ce86e.jpg",
            name: "Michael",
            like: 459,
            view: 4.2
          },
          {
            src: "https://cdn.pixabay.com/photo/2016/01/19/18/03/tea-1150046__340.jpg",
            name: "Geo",
            like: 538,
            view: 4.3
          }
        ]
    }    
    render() {
        const {speciallist} = this.state;
        return (
        <Layout className="Layout" >
            <Header className="nav">
                <Navbar/>
            </Header>
            
            <Content className="item">
                <Divider className="divide"/>
                <h1 style={{color:"lightblue"}}>近期展覽 EVENT</h1>
                <Row gutter={48}>
                <Col span={8} offset={2}>
                    <img alt="new1" className="event" src="https://cdn.pixabay.com/photo/2015/04/20/13/10/rock-731140__340.jpg"/>
                </Col>
                <Col span={8} offset={2}>
                    <img alt="new2" className="event" src="https://cdn.pixabay.com/photo/2015/03/26/10/34/tricycle-691587__340.jpg"/>
                </Col>
                </Row>
                <br/>
                <h1>特選專案 SELECTION</h1>
                <Row gutter={8}>
                    {speciallist.map((item, index, array) => {
                    return(
                        <Col span={6}>
                        <Selection selsrc={item.src} selname={item.name} sellike={item.like} selview={item.view} />
                        </Col>
                    )
                    })}      
                </Row>
            </Content>
        </Layout>
    );
  }
}