import React from 'react';
import { Link } from "react-router-dom";
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/service" > Serwis </Link>
        </li>
        <li>
          <Link to="/maintenance" > Konserwacja </Link>
        </li>
        <li>
          <Link to="/compatibility" > Kompatybilność </Link>
        </li>
        <li>
          <Link to="/products" > Produkty </Link>
        </li>
      </ul>
    </nav>
  );
};


export default sideDrawer;
