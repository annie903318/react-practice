import React, { Component } from 'react';
import { Row,Col,Button,Space,Avatar,Tag } from "antd";
import { TwitterSquareFilled,FacebookFilled } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./Author.css";


export default class Author extends Component {
    render() {
        return (
            <div className="Author">
                <Row gutter={16}>
                    <Col> 
                        <Avatar size={100} src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__340.jpg" />
                    </Col>
                    <Col> 
                        <h3><strong>福器飾物工作室 負責人</strong></h3>
                        <h2><strong>何堂立</strong></h2>
                        <Tag>
                            <a href="#">關注創作人</a>
                        </Tag>
                    </Col>
                </Row>
                <br/>
                <p id="description">
                    福器飾物工作室是從事複合媒材創作之工坊。<br/>
                    創作內容以生活器物、金工飾品等之工藝創作與文創商品開發為主。<br/>
                    茶具、生活器物及金工飾品展售、DIY體驗教學、金工教學、蠟雕教學
                </p>
                <br/>
                <Space>
                    <Button size={"large"} id="store" >儲存專案</Button>
                    <Button size={"large"} >讚賞專案</Button>
                </Space>
            </div >
        );
    }
}
