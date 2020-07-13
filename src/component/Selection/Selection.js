import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Card, Row, Col } from "antd";
import { LikeFilled, EyeFilled } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./Selection.css";

export default class Selection extends Component {
    render() {
        const { selsrc, selname, sellike, selview } = this.props;
        return (
            <Link to="/contents">
                <Card className="selection"
                    bodyStyle={{ padding: "5px 0" }}
                    cover={
                        <img 
                            alt={selname}
                            src={selsrc}
                        />
                    }
                >
                    <Row gutter={[16]} className="product">
                        <Col span={6}>{selname}</Col>
                        <Col span={6} offset={6}><LikeFilled /> {sellike}</Col>
                        <Col span={6}><EyeFilled /> {selview}千</Col>
                    </Row>
                </Card>
            </Link>
        );
    }
}
