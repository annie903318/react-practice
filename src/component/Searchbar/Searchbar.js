import React, { Component } from 'react';
import { Row,Col,Input,Select } from "antd";
import "antd/dist/antd.css";
import Selection from '../Selection/Selection';
import "./Searchbar.css";

const { Search } = Input;
const { Option } = Select;

export default class Searchbar extends Component {
  state = {
    selectionlist: [
      {
        type:"1",
        src: "https://cdn.pixabay.com/photo/2019/03/13/22/51/pet-4053938_1280.jpg",
        name: "Mary",
        like: 527,
        view: 3.5
      },
      {
        type:"2",
        src: "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg",
        name: "Harris",
        like: 249,
        view: 1.8
      },
      {
        type:"1",
        src: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
        name: "Michael",
        like: 459,
        view: 4.2
      },
      {
        type:"3",
        src: "https://cdn.pixabay.com/photo/2016/02/22/10/06/hedgehog-1215140_1280.jpg",
        name: "Geo",
        like: 538,
        view: 4.3
      },
      {
        type:"2",
        src: "https://cdn.pixabay.com/photo/2017/04/30/18/33/cat-2273598_1280.jpg",
        name: "Cindy",
        like: 527,
        view: 3.5
      },
      {
        type:"1",
        src: "https://cdn.pixabay.com/photo/2019/03/13/22/51/pet-4053938_1280.jpg",
        name: "Mary",
        like: 527,
        view: 3.5
      },
      {
        type:"2",
        src: "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg",
        name: "Harris",
        like: 249,
        view: 1.8
      },
      {
        type:"1",
        src: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
        name: "Michael",
        like: 459,
        view: 4.2
      }
    ],
    rename:"name",
    retype:"0"
  };
  result = value => {
    if(value!==""){
      this.setState({ rename: value });
    }else{
      this.setState({ rename: "name" });
    }
  };
  typeOnChange = (value) => {
    this.setState({ retype: value });
  };

  render() {
      const { selectionlist } = this.state;
      const {rename,retype} = this.state;
      let cnt=0;

      return (
          <div className="Searchbar">
            <Row gutter={8} align="bottom">
              <Col span={18}>
                <Search
                  placeholder="搜尋CRAFTPLUS"
                  onSearch={this.result}
                  allowClear
                />
              </Col>
              <Col span={3} offset={1}>
                <Select defaultValue="0" className="select" onChange={this.typeOnChange}>
                  <Option value="0">所有類別</Option>
                  <Option value="1">工藝品</Option>
                  <Option value="2">雕塑</Option>
                  <Option value="3">陶瓷</Option>
                </Select>
              </Col>           
              <Col span={2}>
                排序
                <Select defaultValue="0" className="select">
                  <Option value="0">預設</Option>
                  <Option value="1">按讚數</Option>
                  <Option value="2">發布時間</Option>
                  <Option value="3">瀏覽率</Option>
                </Select>
              </Col>
            </Row>
            <br/>
            <div>
              <Row gutter={[24,24]}>
                {selectionlist.map((item, index, array) => {
                  if(rename!=="name" && retype!=="0"){
                    if(item.name===rename && item.type===retype){
                      return (
                        <Col span={6}>
                          <Selection selsrc={item.src} selname={item.name} sellike={item.like} selview={item.view} />
                        </Col>
                      );
                    }else{
                      if((cnt+1)===array.length){
                        return(
                          <h1 style={{fontSize:"54px"}}>Sorry<br/>Not Found</h1>
                        );
                      }
                      cnt=cnt+1;
                    }
                  }else if(rename!=="name"){
                    if(item.name===rename){
                      return (
                        <Col span={6}>
                          <Selection selsrc={item.src} selname={item.name} sellike={item.like} selview={item.view} />
                        </Col>
                      );
                    }else{
                      if((cnt+1)===array.length){
                        return(
                          <h1 style={{fontSize:"54px"}}>Sorry<br/>Not Found</h1>
                        );
                      }
                      cnt=cnt+1;
                    }
                  }else if(retype!=="0"){
                    if(item.type===retype){
                      return (
                        <Col span={6}>
                          <Selection selsrc={item.src} selname={item.name} sellike={item.like} selview={item.view} />
                        </Col>
                      )
                    }
                  }else{
                    return (
                      <Col span={6}>
                        <Selection selsrc={item.src} selname={item.name} sellike={item.like} selview={item.view} />
                      </Col>
                    )
                  }
                })}
              </Row>
            </div>
          </div>
      );
  }
}