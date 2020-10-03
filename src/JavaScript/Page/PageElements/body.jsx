import './body.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
//News
import Main from '../../Content/News/main.jsx';
//Garage
import Garage from '../../Content/Garage/garage.jsx';
import AddBicycle from '../../Content/Garage/createBicycle.jsx';
import GetBicycle from '../../Content/Garage/getBicycle.jsx';
import UpdateBicycle from '../../Content/Garage/updateBicycle.jsx';
import DeleteBicycle from '../../Content/Garage/deleteBicycle.jsx';
import LoginPage from '../Security/LoginPage.jsx'

//Bicycles
import Bicycles from '../../Content/Bicycles/bicycles.jsx';
//Parts
import Parts from '../../Content/Parts/parts.jsx';


const PageBody = () => {
    return (
        <div className="pageBody">
            <Switch>
                {/* NEWS */}
                <Route path="/login" exact component={LoginPage} />
                {/* NEWS */}
                <Route path="/" exact component={Main} />
                {/* GARAGE */}
                <Route path="/garage" exact component={Garage} />
                <Route path="/garage/new" exact component={AddBicycle} />
                <Route path="/garage/:id" exact component={GetBicycle} />
                <Route path="/garage/:id/edit" exact component={UpdateBicycle} />
                <Route path="/garage/:id/delete" exact component={DeleteBicycle} />
                {/* BICYCLES */}
                <Route path="/bicycles" exact component={Bicycles} />
                {/* PARTS */}
                <Route path="/parts" exact component={Parts} />
            </Switch>
        </div>
    );
}

export default PageBody;