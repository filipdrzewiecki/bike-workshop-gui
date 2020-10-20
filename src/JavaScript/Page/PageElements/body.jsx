import './body.css';
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
//Garage
import Garage from '../../Content/Garage/garage.jsx';
import AddBicycle from '../../Content/Garage/createBicycle.jsx';
import GetBicycle from '../../Content/Garage/getBicycle.jsx';
import UpdateBicycle from '../../Content/Garage/updateBicycle.jsx';
import DeleteBicycle from '../../Content/Garage/deleteBicycle.jsx';
import LoginPage from '../Security/LoginPage.jsx'

import BicycleFrame from '../../Content/Parts/fetchBicycleFrame.jsx';
import AddFrameToBike from '../../Content/Parts/addFrameToBicycle.jsx';
//Bicycles
import Bicycles from '../../Content/Bicycles/bicycles.jsx';
//Parts
import Parts from '../../Content/Parts/parts.jsx';


const PageBody = () => {
    return (
        <div className="pageBody">
            <Switch>
                {/* LOGIN */}
                <Route path="/login" exact component={LoginPage} />
                
                {/* GARAGE */}
                <Route path="/" exact component={Garage} />
                <Redirect exact from="/" to="/:id/garage" />

                <Route path="/:id/garage" exact component={Garage} />
                <Route path="/:id/garage/new" exact component={AddBicycle} />
                <Route path="/:id/garage/:id" exact component={GetBicycle} />
                <Route path="/:id/garage/:id/edit" exact component={UpdateBicycle} />
                <Route path="/:id/garage/:id/delete" exact component={DeleteBicycle} />

                <Route path="/:id/garage/:id/frame" exact component={BicycleFrame} />
                <Route path="/:id/garage/:id/frame/add" exact component={AddFrameToBike} />

                {/* BICYCLES */}
                <Route path="/bicycles" exact component={Bicycles} />
                {/* PARTS */}
                <Route path="/parts" exact component={Parts} />
            </Switch>
        </div>
    );
}

export default PageBody;