import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/article.jsx';
import { getBicycle } from "../apis/api-router.jsx"
import { connect } from 'react-redux';
import BicycleDetails from './bicycleDetails.jsx'

class Bicycle extends Component {

  componentDidMount() {
    this.props.getBicycle(this.props.match.params.id);
  }

  renderBicycle() {
    return (
    <ArticleBody
      backButtonLink='/garage'
      title={this.props.bicycle.name}
      secondaryTitle={<div>{this.props.bicycle.brand} {this.props.bicycle.model} {this.props.bicycle.year}</div>}
      paragraphs={[
        <BicycleDetails bicycle={this.props.bicycle}/>
      ]}
    />
    );
  }

  render() {
    if (!this.props.bicycle) {
      return <div>Loading...</div>
    }
    return this.renderBicycle();
  }
}

const mapStateToProps = (state, ownProps) => {
  return { bicycle: state.bicycles[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { getBicycle })(Bicycle);