import React, { Component } from 'react';
import { message,Row,Col,Divider,Button } from "antd";
import { CloseCircleFilled } from '@ant-design/icons';
import "antd/dist/antd.css";
import Detail from '../../component/Detail/Detail';
import Author from '../../component/Author/Author';
import "./Contents.css";


export default class Contents extends Component {
    handleClick = e => {
        message.info(`Notification ${e.key}`);
    };
    
    render() {
        return (
            <div className="Contents">
                <Row >
                    <Col span={13} id="left">
                        <img id="project" alt="proj" src="https://cdn.pixabay.com/photo/2019/07/21/16/29/paris-4353082_960_720.jpg"/>
                    </Col>
                    <Col span={11} id="right">
                       <button id="close"><CloseCircleFilled style={{fontSize:"30px"}}/></button>
                       <Detail />
                       <Divider />
                       <Author />
                    </Col>
                </Row>
            </div >
        );
    }
}
