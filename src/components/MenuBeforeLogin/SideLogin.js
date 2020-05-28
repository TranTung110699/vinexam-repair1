import React from 'react';

import './SideLogin.css';
import Login from "./Login";

const sideLogin = props =>{
    let drawerClass = 'side-login';
    if(props.show){
        drawerClass ='side-login open';
    }

    return(
        <nav className={drawerClass}>
            <Login />

        </nav>
    );
};

export default sideLogin;