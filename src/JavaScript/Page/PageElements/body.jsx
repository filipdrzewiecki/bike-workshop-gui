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

import BicyclePart from '../../Content/Garage/fetchBicyclePart.jsx';
import AddPartToBike from '../../Content/Garage/addPartToBicycle.jsx';
//Bicycles
import Bicycles from '../../Content/Bicycles/bicycles.jsx';
//Parts
import Parts from '../../Content/Parts/parts.jsx';
import FetchParts from '../../Content/Parts/fetchParts.jsx';
import FetchPart from '../../Content/Parts/fetchPart.jsx';
import CreatePart from '../../Content/Parts/createPart.jsx';


const PageBody = () => {
    return (
        <div className="pageBody">
            <Switch>
                {/* LOGIN */}
                <Route path="/login" exact component={LoginPage} />
                
                {/* GARAGE */}
                <Route path="/" exact component={Garage} />
                <Redirect exact from="/" to="/:user/garage" />
                <Route path="/:user/garage" exact component={Garage} />
                <Route path="/:user/garage/new" exact component={AddBicycle} />
                <Route path="/:user/garage/:bike" exact component={GetBicycle} />
                <Route path="/:user/garage/:bike/edit" exact component={UpdateBicycle} />
                <Route path="/:user/garage/:bike/delete" exact component={DeleteBicycle} />
                <Route path="/:user/garage/:bike/:part" exact component={BicyclePart} />
                <Route path="/:user/garage/:bike/:part/new" exact component={AddPartToBike} />

                {/* BICYCLES */}
                <Route path="/bicycles" exact component={Bicycles} />

                {/* PARTS */}
                <Route path="/parts" exact component={Parts} />
                <Route path="/parts/:part" exact component={FetchParts} />
                <Route path="/parts/:part/new" exact component={CreatePart} />
                <Route path="/parts/:part/:id" exact component={FetchPart} />

            </Switch>
        </div>
    );
}

export default PageBody;