import React, { Component } from 'react';
import { Row,Col,Input,Menu,Dropdown, Button } from "antd";
import {BuildFilled, CaretDownOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import Selection from './Selection';

const {Search} = Input;

export default class Searchbar extends Component {
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
    ],
    rename: "name"
    
    
  };
  result = value => {
    const {rename} = this.state;
    if(value!==""){
      this.setState({ rename: value });
    }else{
      this.setState({ rename: "name" });
    }
  };


  render() {
      const { selectionlist } = this.state;
      const {rename} = this.state;
      const menu = (
          <Menu>
            <Menu.Item>
              <a target="_self" rel="noopener noreferrer" href="/">
                工藝品
              </a>
            </Menu.Item>
            <Menu.Item>
              <a target="_self" rel="noopener noreferrer" href="/">
                雕塑
              </a>
            </Menu.Item>
            <Menu.Item>
              <a target="_self" rel="noopener noreferrer" href="/">
                陶瓷
              </a>
            </Menu.Item>
          </Menu>
      );
      const sort = (
        <Menu>
          <Menu.Item>
            <a target="_self" rel="noopener noreferrer" href="/">
              按讚數
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_self" rel="noopener noreferrer" href="/">
              發布時間
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_self" rel="noopener noreferrer" href="/">
              瀏覽率
            </a>
          </Menu.Item>
        </Menu>
    );

      return (
          <div className="Searchbar">
            <Row gutter={8}>
              <Col span={18}>
                <Search
                  placeholder="搜尋CRAFTPLUS"
                  onSearch={this.result}
                  allowClear
                />
              </Col>
              <Col span={3} offset={1}>
                <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
                    <Button><BuildFilled />所有類別<CaretDownOutlined /></Button>
                </Dropdown>
              </Col>
              <Col span={2}>
                <Dropdown overlay={sort} placement="bottomCenter" trigger={['click']}>
                    <Button>排序<CaretDownOutlined /></Button>
                </Dropdown>
              </Col>
            </Row>
            <br/>
            {this.output}
            <div>
              <Row gutter={[24,24]} style={{margin:"auto"}}>
                {selectionlist.map((item, index, array) => {
                  let cnt=0;
                  if(rename!="name"){
                    if(item.name==rename){
                      return (
                        <Col span={6}>
                          <Selection selsrc={item.src} selname={item.name} sellike={item.like} selview={item.view} />
                        </Col>
                      );
                    }else{
                      cnt+=1;
                      if((cnt=1)==index){
                        return(
                          <h1 style={{fontSize:"60px"}}>Not Found</h1>
                        );
                      }
                    }
                  }else{
                    return (
                      <Col span={6}>
                        <Selection selsrc={item.src} selname={item.name} sellike={item.like} selview={item.view} />
                      </Col>
                    );
                  }
                })}
              </Row>
              {/* <Row gutter={[24,24]} style={{margin:"auto"}}>
                {selectionlist.map((item, index, array) => {
                  return (
                    <Col span={6}>
                      <Selection selsrc={item.src} selname={item.name} sellike={item.like} selview={item.view} />
                    </Col>
                  );
                })}
              </Row> */}
            </div>
          </div >


      );
  }
}
