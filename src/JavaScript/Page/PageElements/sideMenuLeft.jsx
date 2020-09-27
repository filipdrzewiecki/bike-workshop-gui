import './sideMenu.css';
import React from 'react';

const SideMenu = (props) => {
    return (
        <div className="sidebar-left">
                {props.paragraphs.map((paragraph, i) => <h4 key={i}>{paragraph}</h4>)}
        </div>
    );
}

export default SideMenu;

