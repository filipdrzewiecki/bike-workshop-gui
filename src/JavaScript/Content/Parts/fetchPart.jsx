import '../../Css/index.css';
import React, { Component } from 'react';
import PartDetails from './partDetails.jsx';
import { fetchPart } from "../api/api-router.jsx"
import { connect } from 'react-redux';

class FetchPart extends Component {

  componentDidMount() {
    this.props.fetchPart(this.props.match.params.part, this.props.match.params.id);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderBicycle() {
    const part = this.props.part;
    const type = this.props.match.params.part;
    return (
      <PartDetails
        backButtonLink={`/parts/${type}`}
        deleteLink={`/parts/${this.props.part.product}/delete`}
        editLink={`/parts/${this.props.part.product}/edit`}
        addToBicycleLink={`/parts/${type}/${this.props.match.params.id}/add`}
        title={<React.Fragment> {this.capitalizeFirstLetter(part.product)} {part.brand}</React.Fragment>}
        part={part}
        secondaryTitle={<div> {part.model} {part.series} {part.year} </div>}
      />
    );
  }

  render() {
    if (!this.props.part) {
      return <div>Loading...</div>
    }
    return this.renderBicycle();
  }
}

const mapStateToProps = (state) => {
  const part = state.parts.part;
  return { part: part }
}

export default connect(mapStateToProps, { fetchPart })(FetchPart);