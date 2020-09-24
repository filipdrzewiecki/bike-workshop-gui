import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/article.jsx';
import { Link } from "react-router-dom";
import { getBicycles } from "../apis/api-router.jsx"
import { connect } from 'react-redux';

const BicycleList = ({ bicycles }) => {
  return (
    <div> 
      {bicycles.map((bike) => (
        <div class="bicycle" key={bike.id}>
          <div class="card-body">
            <h2>{bike.name}</h2>
            <h5>{bike.brand} {bike.model}</h5>
            <h5>Typ: {bike.type}</h5>
            <h5>Waga: {bike.weight}</h5>
            <h5><Link to={`/garage/${bike.id}`} > szczegóły </Link></h5>
          </div>
        </div>
      ))}
    </div>
  )
};

class Bicycles extends Component {

  componentDidMount() {
    this.props.getBicycles();
  }

  render() {
    return (
      <ArticleBody
        title="Twoje rowery"
        paragraphs={[
          <div class="bicycle"><h2><Link to="/garage/new" > Dodaj rower + </Link></h2></div>,
          <div><BicycleList bicycles={this.props.bicycles} /></div>
        ]}
      />
    );
  }

}

const mapStateToProps = (state) => {
  return { bicycles: Object.values(state.bicycles) }
}

export default connect(mapStateToProps, { getBicycles })(Bicycles);