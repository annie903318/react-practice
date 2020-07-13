import React, { Component } from 'react';
import { Button,Space } from "antd";
import { TwitterSquareFilled,FacebookFilled } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./Detail.css";


export default class Detail extends Component {
    render() {
        return (
            <div className="Detail">
                <h1><strong>浪花下的女王</strong></h1>
                <br/>
                <p id="description">『浪花下的女王』的作品，以台灣東部所產出的墨玉為主要材料，運用鏤空的雕刻表現
                    方式結合金工的技法來呈現，獲得台灣寶玉石設計競賽-玉石雕件組首獎。
                </p>
                <br/>
                <p><strong>作品規格:2100*160*300m</strong></p>
                <br/>
                <Space>
                    <Button type="primary" icon={<TwitterSquareFilled />}></Button>
                    <Button type="primary" icon={<FacebookFilled />}></Button>
                </Space>
            </div >
        );
    }
}
