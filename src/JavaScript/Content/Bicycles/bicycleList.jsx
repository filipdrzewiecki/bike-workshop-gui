import React from 'react';
import '../../Css/index.css';

const BicycleList = ({ bicycles }) => {
    return (
      <div>
        {bicycles.map((bike) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{bike.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Typ: {bike.frontDerailleurInfo}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Waga: {bike.frontDerailleurInfo}</h6>
            </div>
          </div>
        ))}
      </div>
    )
  };

  export default BicycleList
