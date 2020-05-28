import React,{ Component } from "react";
import Modal from "react-responsive-modal";
import '../Menu/Menu.css';
import './MenuBeforeLogin.css';
import menulogo from './images/logo-vinschool.png';
import TonggleLogin from './ToggleLogin';

const menubelogin = (props) => (
            <>
                <header className="menu">
                    <nav className="menu_navigation">
                        <div className="menu_logo">
                            <a href={{}}><img src={menulogo}/></a>
                        </div>
                        <div className="spacer">
                            <div style={{color: 'white'}} align="center">Bạn vui lòng đăng nhập để thực hiện tác vụ
                                này
                            </div>
                        </div>

                            <TonggleLogin click={props.drawerLoginHandler}/>

                    </nav>

                </header>

            </>
);

export default menubelogin;

