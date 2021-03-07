import '../../Css/index.css';
import '../../Page/PageElements/modal.css'

import React from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { fetchBicyclePart, deleteBicyclePart } from '../api/api-router';

import Modal from '../../Page/PageElements/modal.jsx'
import history from '../../../history.jsx'
import { getUserName } from '../../Page/Security/authHeader';


class DeleteBicicyle extends React.Component {

  componentDidMount() {
    this.props.fetchBicyclePart(this.props.match.params.bike, this.props.match.params.part);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteBicyclePart(this.props.match.params.bike, this.props.match.params.part)} className="button-do">Usuń</button>
        <Link className="button-dont" to={`/${getUserName()}/garage/${this.props.match.params.bike}`}><span>WRÓĆ</span></Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.bicycle) {
      return 'Czy na pewno chcesz usunąć tę część?'
    }
    return (
      `Czy na pewno chcesz usunąć część ?`

    );

  }

  render() {
    return (
      <Modal
        header="Usuń część"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push(`/${getUserName()}/garage/${this.props.match.params.bike}`)}
      />
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return { bicycle: state.bicycles[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchBicyclePart, deleteBicyclePart })(DeleteBicicyle);