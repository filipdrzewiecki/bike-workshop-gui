import '../../Css/index.css';
import React, { Component } from 'react';
import PartDetails from '../Parts/partDetails.jsx';
import { fetchBicyclePart } from "../api/api-router.jsx"
import { connect } from 'react-redux';
import { getUserName } from '../../Page/Security/authHeader';

class Part extends Component {

  componentDidMount() {
    this.props.fetchBicyclePart(this.props.match.params.bike, this.props.match.params.part);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderPart() {
    if (!this.props.part) {
      return <div>Loading...</div>
    }
    const part = this.props.part;
    const type = this.props.match.params.part;
    const biike = this.props.match.params.bike;
    return (
      <PartDetails
        backButtonLink={`/${getUserName()}/garage/${this.props.match.params.bike}`}
        deleteLink={`/${this.props.match.params.user}/garage/${biike}/${type}/delete`}
        editLink={`/${this.props.match.params.user}/garage/${biike}/${type}/edit`}
        title={this.capitalizeFirstLetter(part.product)}
        part={part}
        secondaryTitle={<div>{part.brand} {part.series} {part.year} </div>}
      />
    );
  }

  render() {
    if (!this.props.part) {
      return <div>Loading...</div>
    }
    return this.renderPart();
  }
}

const mapStateToProps = (state) => {
  return { part: state.parts.part }
}

export default connect(mapStateToProps, { fetchBicyclePart })(Part);