import React from 'react';

import './SideDrawer.css';
import SideMenu from "./SideMenu";

const sideDrawer = props =>{
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses ='side-drawer open';
    }

    return(
        <nav className={drawerClasses}>
            <SideMenu />

        </nav>
    );
};

export default sideDrawer;