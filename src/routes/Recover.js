import React, { Component } from 'react';
import { Layout,Divider } from "antd";
import "antd/dist/antd.css";
import Navbar from '../component/Navbar';
import Searchbar from '../component/Searchbar';

const { Header, Content } = Layout;

export default class Recover extends Component {
  render() {
    return (
      <Layout className="layout" >
        <Header style={{backgroundColor:"white"}}>
          <Navbar/>
        </Header>
        
        <Content style={{ padding: '0 50px',backgroundColor:"white"}}>
          <Divider style={{ color: "#d8d8d8" }}/>
          <Searchbar/>  
        </Content>
      </Layout>
    );
  }
}
