import React, { Component } from 'react';
import { Layout,Divider } from "antd";
import "antd/dist/antd.css";
import Test from '../component/Test';

const { Header, Content } = Layout;

export default class Carousel extends Component {
  render() {
    return (
      <Layout className="layout" >
        <Header style={{backgroundColor:"white"}}>
          <Test/>
        </Header>
        
        <Content style={{ padding: '0 50px',backgroundColor:"white"}}>
          <Divider/>
        </Content>
      </Layout>
    );
  }
}
