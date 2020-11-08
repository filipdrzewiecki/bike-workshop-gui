import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/menu.jsx';
import { connect } from 'react-redux';
import { getBicycle, updateBicycle } from '../apis/api-router';
import BicycleForm from './add-bicycle-form';
import { getUserName } from '../../Page/Security/authHeader';

class UpdateBicycle extends Component {

  componentDidMount() {
    this.props.getBicycle(this.props.match.params.id);
  }


  onSubmit = (formValues) => {
    this.props.updateBicycle(this.props.match.params.id, formValues);
  }

  render() {
    return (
      <ArticleBody
        title="Edytuj rower"
        backButtonLink={`/${getUserName()}/garage/${this.props.match.params.id}`}
        paragraphs={[
          <BicycleForm
            initialValues={this.props.bicycle}
            onSubmit={this.onSubmit}
            send="Edytuj"
          />
        ]}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const bicycles = Object.values(state.bicycles);
  return { bicycle: bicycles.find(bike => bike.name === ownProps.match.params.id) }
}

export default connect(mapStateToProps, { getBicycle, updateBicycle })(UpdateBicycle);