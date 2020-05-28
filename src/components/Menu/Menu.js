import React from "react";
import './Menu.css';
import logout from './images/logout.png';
import menulogo from './images/logo-vinschool.png';
import { CaretDownOutlined } from '@ant-design/icons';
import ToggleButton from "../SideMenu/ToggleButton";

const menu = (props) => (
    <header className="menu">
        <nav className="menu_navigation">
            <div className="menu_logo">
                <div className="toggle_button">
                    <ToggleButton click={props.drawerClickHandler}/>
                </div>
                <a href={{}}><img src={menulogo} /></a>
            </div>
            <div className="spacer">

            </div>
            <div className="menu_navigation-items">
                <img className="avatar" src="https://vsc-api.lotuslms.com/ufiles/2020/04/5df21af06ddb5e7ce61f8a83/5e880b10f8724009d04160d6.png"/>&emsp;Teacher name
                <div className="dropdown">
                    <button className="dropbtn"><CaretDownOutlined /></button>
                    <div className="dropdown-content">
                        <a href={{}}>Tài khoản</a>
                        <a href={{}}>Quản trị hệ thống</a>
                        <a href={{}}>Đăng xuất&emsp;<img src={logout} /></a>
                    </div>
                </div>

            </div>
        </nav>
    </header>
);

export default menu;
