import React, { Component } from 'react';
import { Menu,Dropdown, Button } from "antd";
import {BuildFilled, CaretDownOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


export default class Searchbar extends Component {
    
    render() {
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                  1st menu item
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                  2nd menu item
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                  3rd menu item
                </a>
              </Menu.Item>
            </Menu>
        );

        return (
            <div className="Searchbar">
                <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
                    <Button><BuildFilled />創作領域<CaretDownOutlined /></Button>
                </Dropdown>
            </div >
        );
    }
}
