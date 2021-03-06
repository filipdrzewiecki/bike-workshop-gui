import '../../Css/index.css'
import './body.css'
import React from 'react';
import { Route, Switch } from "react-router-dom";
//Garage
import FetchBicycles from '../../Content/Garage/fetchBicycles.jsx';
import CreateBicycle from '../../Content/Garage/createBicycle.jsx';
import FetchBicycle from '../../Content/Garage/fetchBicycle.jsx';
import UpdateBicycle from '../../Content/Garage/updateBicycle.jsx';
import DeleteBicycle from '../../Content/Garage/deleteBicycle.jsx';
import LoginPage from '../Security/LoginPage.jsx'

import BicyclePart from '../../Content/Garage/fetchBicyclePart.jsx';
import AddPartToBike from '../../Content/Garage/addPartToBicycle.jsx';
import DeleteBicyclePart from '../../Content/Garage/deleteBicyclePart.jsx';

//Bicycles
import Bicycles from '../../Content/Bicycles/bicycles.jsx';
//Parts
import Parts from '../../Content/Parts/parts.jsx';
import FetchOfficialParts from '../../Content/Parts/FetchOfficialParts.jsx';
import FetchPart from '../../Content/Parts/fetchPart.jsx';
import CreatePart from '../../Content/Parts/createPart.jsx';
import AddExistingPartToBicycle from '../../Content/Parts/addExistingPartToBicycle.jsx';


const PageBody = () => {
    return (
        <div className="pageBody">
            <Switch>
                {/* LOGIN */}
                <Route path="/login" exact component={LoginPage} />
                
                {/* GARAGE */}
                <Route path="/" exact component={FetchBicycles} />
                <Route path="/:user/garage" exact component={FetchBicycles} />
                <Route path="/:user/garage/new" exact component={CreateBicycle} />
                <Route path="/:user/garage/:bike" exact component={FetchBicycle} />
                <Route path="/:user/garage/:bike/edit" exact component={UpdateBicycle} />
                <Route path="/:user/garage/:bike/delete" exact component={DeleteBicycle} />
                <Route path="/:user/garage/:bike/:part" exact component={BicyclePart} />
                <Route path="/:user/garage/:bike/:part/new" exact component={AddPartToBike} />
                <Route path="/:user/garage/:bike/:part/delete" exact component={DeleteBicyclePart} />

                {/* BICYCLES */}
                <Route path="/bicycles" exact component={Bicycles} />

                {/* PARTS */}
                <Route path="/parts" exact component={Parts} />
                <Route path="/parts/:part" exact component={FetchOfficialParts} />
                <Route path="/parts/:part/new" exact component={CreatePart} />
                <Route path="/parts/:part/:id" exact component={FetchPart} />
                <Route path="/parts/:part/:partId/add" exact component={AddExistingPartToBicycle} />
            </Switch>
        </div>
    );
}

export default PageBody;