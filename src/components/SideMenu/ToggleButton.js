import React from 'react';
import './ToggleButton.css';

const drawerToggleButton = props => (
    <button className="toggle-btn" onClick={props.click}>
        <div className="toggle-btn_line"/>
        <div className="toggle-btn_line"/>
        <div className="toggle-btn_line"/>
    </button>
);

export default drawerToggleButton;