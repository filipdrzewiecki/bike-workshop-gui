import '../../Css/index.css';
import React, { Component } from 'react';
import PartDetails from './partDetails.jsx';
import { fetchPart } from "../apis/api-router.jsx"
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
    const type = this.props.match.params.type;
    return (
      <PartDetails
        backButtonLink={`/parts/${type}`}
        deleteLink={`/parts/${this.props.part.product}/delete`}
        editLink={`/parts/${this.props.part.product}/edit`}
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
  return { part: state.parts.part }
}

export default connect(mapStateToProps, { fetchPart })(FetchPart);