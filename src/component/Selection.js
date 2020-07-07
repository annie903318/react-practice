import React, { Component } from 'react';
import { Card, Row, Col } from "antd";
import { LikeFilled, EyeFilled } from '@ant-design/icons';
import "antd/dist/antd.css";

export default class Selection extends Component {
    render() {
        const { selsrc, selname, sellike, selview } = this.props;
        // const { Meta } = Card;
        return (
            <Card className="Selection"
                style={{ width: 280 }}
                bodyStyle={{ padding: "5px 0" }}
                cover={
                    <img
                        style={{ height: 200 }}
                        alt={selname}
                        src={selsrc}
                    />
                }
            >
                <Row gutter={[16]} style={{padding: "0 8px"}}>
                    <Col span={6}>{selname}</Col>
                    <Col span={6} offset={6}><LikeFilled /> {sellike}</Col>
                    <Col span={6}><EyeFilled /> {selview}千</Col>
                </Row>
            </Card>
        );
    }
}
