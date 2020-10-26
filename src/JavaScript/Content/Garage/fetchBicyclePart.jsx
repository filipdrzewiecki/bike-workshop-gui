import '../../Css/index.css';
import React, { Component } from 'react';
import PartDetails from '../Parts/partDetails.jsx';
import { fetchBicyclePart } from "../apis/api-router.jsx"
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
    const part = this.props.part;
    const type = this.props.match.params.part;
    return (
      <PartDetails
        backButtonLink={`/${getUserName()}/garage/${this.props.match.params.bike}`}
        deleteLink={`/${this.props.match.params.user}/parts/${type}/delete`}
        editLink={`/${this.props.match.params.user}/parts/${type}/edit`}
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
  return { part: Object.values(state.parts)[0] }
}

export default connect(mapStateToProps, { fetchBicyclePart })(Part);