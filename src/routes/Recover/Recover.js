import React, { Component } from 'react';
import { Layout,Divider } from "antd";
import "antd/dist/antd.css";
import Navbar from '../../component/Navbar/Navbar';
import Searchbar from '../../component/Searchbar/Searchbar';
import "./Recover.css";

const { Header, Content } = Layout;

export default class Recover extends Component {
  render() {
    return (
      <Layout className="layout" >
        <Header className="nav">
          <Navbar/>
        </Header>
        
        <Content className="item">
          <Divider className="divide"/>
          <Searchbar/>  
        </Content>
      </Layout>
    );
  }
}
