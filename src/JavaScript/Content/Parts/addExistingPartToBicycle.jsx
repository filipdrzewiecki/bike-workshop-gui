import '../../Css/index.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPart, addExistingPartToBicycle, getBicycles } from '../api/api-router';
import { Link } from "react-router-dom";
import Modal from '../../Page/PageElements/modal.jsx'
import history from '../../../history.jsx'


class AddExitingPartToBicycle extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: "DEFAULT" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  renderBicycleList(bicycles) {
    console.log(bicycles)
    return (
      <React.Fragment>
        <form >
          <select defaultValue='DEFAULT' onChange={this.handleChange}>
            <option disabled value="DEFAULT"> -- Wybierz -- </option>
            {bicycles.map((bike) => (
              <option value={bike.name} key={bike.id}>{bike.name}</option>
            ))}
          </select>
        </form>
      </React.Fragment>
    )
  };

  componentDidMount() {
    this.props.fetchPart(this.props.match.params.part, this.props.match.params.partId);
    this.props.getBicycles();
  }

  renderActions() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.addExistingPartToBicycle(this.state.value, this.props.match.params.part, this.props.match.params.partId)} className="button-do">DODAJ</button>
        <Link className="button-dont" to={`/parts/${this.props.match.params.part}/${this.props.match.params.partId}`}><span>WRÓĆ</span></Link>


      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.part) {
      return 'Loading...';
    }
    console.log(this.props.part)
    return (
      <div>
        <div>Do którego roweru chcesz dodać ramę {this.props.part.brand} {this.props.part.model}?</div>
        <div className="FieldBicycles">{this.renderBicycleList(this.props.bicycles)}</div>
      </div>
    );

  }

  render() {
    return (
      <Modal
        header="Dodaj do roweru"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push(`/parts/${this.props.match.params.part}/${this.props.match.params.partId}`)}
      />
    );
  }

}

const mapStateToProps = (state) => {
  return { part: state.parts.part, bicycles: Object.values(state.bicycles) }
}

export default connect(mapStateToProps, { fetchPart, addExistingPartToBicycle, getBicycles })(AddExitingPartToBicycle);