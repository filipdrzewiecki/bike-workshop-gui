import './body.css';
import React from 'react';
import SideMenuLeft from './sideMenuLeft.jsx';
import SideMenuRight from './sideMenuRight.jsx';
import { Route, Switch, Link } from "react-router-dom";
//News
import Main from '../../Content/News/main.jsx';
//Garage
import Garage from '../../Content/Garage/garage.jsx';
//Bicycles
import Bicycles from '../../Content/Bicycles/bicycles.jsx';
//Parts
import Parts from '../../Content/Parts/parts.jsx';



const LeftMenu = () => {
    return (
        <SideMenuLeft
            paragraphs={[
                <Link to={'/service/frame/headset'}>Serwis sterów</Link>,
                <Link to={'/compatibility/wheel/tyre-to-rim'}>Jak dobrać opony</Link>,
                <Link to={'/compatibility/drivetrain/cassette'}>Jak dobrać kasetę</Link>
            ]}
        />
    );
}

const RightMenu = () => {
    return (
        <SideMenuRight
            paragraphs={[
                <Link to={'/service/frame/headset'}>Serwis sterów</Link>,
                <Link to={'/compatibility/wheel/tyre-to-rim'}>Jak dobrać opony</Link>,
                <Link to={'/compatibility/drivetrain/cassette'}>Jak dobrać kasetę</Link>
            ]}
        />
    );
}

const PageBody = () => {
    return (
        <div className="pageBody">
            <LeftMenu />
            <Switch>
                {/* NEWS */}
                <Route path="/" exact component={Main} />
                {/* GARAGE */}
                <Route path="/garage" exact component={Garage} />
                {/* BICYCLES */}
                <Route path="/bicycles" exact component={Bicycles} />
                {/* Parts */}
                <Route path="/parts" exact component={Parts} />

            </Switch>
            <RightMenu />
        </div>
    );
}

export default PageBody;