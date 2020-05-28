import React from 'react';
import './ToggleLogin.css';

const creatToggleLogin = props => (
    <button className="toggle-btn" onClick={props.click}>
        Đăng nhập
    </button>
);

export default creatToggleLogin;