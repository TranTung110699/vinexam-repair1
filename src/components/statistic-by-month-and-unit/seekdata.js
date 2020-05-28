import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd item
    </Menu.Item>
  </Menu>
);

class SeekData extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <Dropdown overlay={menu}>
            <Button>
              Search By Month <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menu}>
            <Button>
              Search By Unit <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className="col-7">
          <h4>Số lượng thí sinh đã tham gia theo: (Tháng / Đơn Vị)</h4>
        </div>
        
      </div>
    );
  }
}

export default SeekData;
