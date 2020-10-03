import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/article.jsx';
import { Link } from "react-router-dom";
import { getBicycles } from "../apis/api-router.jsx"
import { connect } from 'react-redux';
import { MapType } from './getBicycle.jsx';



const BicycleList = ({ bicycles }) => {
  return (
    <div> 
      {bicycles.map((bike) => (
        <Link to={`/garage/${bike.id}`}  key={bike.id}>
        <div className="bicycle" key={bike.id}>
            <h2>{bike.name}</h2>
            <div>{bike.brand} {bike.model}</div>
            <div><MapType type = {bike.type }/>  {bike.weight} kg </div>
        </div>
        </Link>
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
        isBackButton='false'
        title="Twoje rowery"
        paragraphs={[
          <Link to="/garage/new" ><div className="bicycle"><h2> Dodaj rower + </h2></div></Link>,
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