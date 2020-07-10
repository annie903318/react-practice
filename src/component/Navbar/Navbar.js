import React, { Component } from 'react';
import { message, Button, Menu, Avatar } from "antd";
import { AppstoreOutlined,SearchOutlined, MailOutlined, BellFilled, UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./Navbar.css";

const {SubMenu} = Menu;

export default class Navbar extends Component {
    handleClick = e => {
        message.info(`Notification ${e.key}`);
    };
    
    render() {
        return (
            <div className="Navbar">
                <Button placement="bottomLeft"><AppstoreOutlined /></Button>
                <Menu mode="horizontal" defaultSelectedKeys={['user']}>
                    <Menu.Item key="search"><SearchOutlined /></Menu.Item>
                    <Menu.Item key="mail"><MailOutlined /></Menu.Item>
                    <SubMenu icon={<BellFilled />}  onClick={this.handleClick}>
                        <Menu.Item key="1">Notification 1</Menu.Item>
                        <Menu.Item key="2">Notification 2</Menu.Item>
                        <Menu.Item key="3">Notification 3</Menu.Item>
                        <Menu.Item key="4">Notification 4</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="user"><Avatar icon={<UserOutlined />} /></Menu.Item>
                </Menu>
            </div >
        );
    }
}
