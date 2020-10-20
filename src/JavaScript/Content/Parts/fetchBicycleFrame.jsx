import '../../Css/index.css';
import React, { Component } from 'react';
import PartDetails from '../../Page/PageElements/partDetails.jsx';
import PartSection from '../../Page/PageElements/partSection.jsx';
import { fetchPart } from "../apis/api-router.jsx"
import { connect } from 'react-redux';
import { getUserName } from '../../Page/Security/authHeader';

class Frame extends Component {

  componentDidMount() {
    this.props.fetchPart(this.props.match.params.id);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderFrame() {
    const part = this.props.part;
    return (
      <PartDetails
        backButtonLink={`/${getUserName()}/garage/${this.props.match.params.id}`}
        title={this.capitalizeFirstLetter(part.product)}
        bicycle={part}
        secondaryTitle={<div>{part.brand} {part.series} {part.year} </div>}
        paragraphs={this.renderDetails()}
      />
    );
  }

  renderDetails() {
    const part = this.props.part;
      return ([
        <PartSection
          sectionTitle='Ogólne'
          fieldNames={['Typ', 'Rozmiar', 'Waga']}
          fieldValues={[part.purpose, part.size, part.weight]}
        />,
        <PartSection
          sectionTitle='Suport'
          fieldNames={['Typ', 'Wymiary']}
          fieldValues={[part.bottomBracketType, part.bottomBracketSize]}
        />,
        <PartSection
          sectionTitle='Rura sterowa'
          fieldNames={['Taper', 'Stery']}
          fieldValues={[part.forkTubeType, part.headsetType]}
        />,
        <PartSection
          sectionTitle='Inne'
          fieldNames={['Tylna oś', 'Typ hamulca', 'Zacisk sztycy', 'Wymiar sztycy']}
          fieldValues={[part.rearWheelAxleSize, part.brakeType, part.seatpostCaliperDiameter, part.seatpostSize]}
        />
        ]);
  }

  render() {
    return this.props.part ? this.renderFrame() : <div>Loading</div>
  }
}


const mapStateToProps = (state) => {
  return { part: Object.values(state.parts)[0] }
}

export default connect(mapStateToProps, { fetchPart })(Frame);