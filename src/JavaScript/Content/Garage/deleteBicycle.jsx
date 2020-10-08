import '../../Css/index.css';
import '../../Page/PageElements/modal.css'

import React from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import {getBicycle, deleteBicycle} from '../apis/api-router';

import Modal from '../../Page/PageElements/modal.jsx'
import history from '../../../history.jsx'
import { getUserName } from '../../Page/Security/authHeader';


class DeleteBicicyle extends React.Component {

  componentDidMount() {
    this.props.getBicycle(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteBicycle(this.props.match.params.id)} className="button-do">Usuń</button>
        <Link className="button-dont" to={`/${getUserName()}/garage/${this.props.match.params.id}`}><span>WRÓĆ</span></Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.bicycle) {
      return 'Czy na pewno chcesz usunąć ten rower?'
    }
    return (
      `Czy na pewno chcesz usunąć rower ${this.props.bicycle.name}?`

    );
    
  }

  render() {
    return (
        <Modal
          header="Usuń rower"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push(`/${getUserName()}/garage/${this.props.match.params.id}`)}
        />
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return { bicycle: state.bicycles[ownProps.match.params.id] }
}

export default connect (mapStateToProps, {getBicycle, deleteBicycle} ) (DeleteBicicyle);