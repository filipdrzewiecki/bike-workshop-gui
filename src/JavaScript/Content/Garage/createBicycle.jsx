import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/menu.jsx';
import { connect } from 'react-redux';
import { createBicycle } from '../api/api-router';
import BicycleForm from './add-bicycle-form';
import { getUserName } from '../../Page/Security/authHeader';

class AddBicycle extends Component {

  onSubmit = (formValues) => {
    this.props.createBicycle(formValues);
  }

  render() {
    return (
      <ArticleBody
        title="Create bicycle"
        backButtonLink={`/${getUserName()}/garage`}
        paragraphs={[
          <BicycleForm onSubmit={this.onSubmit} send="Dodaj" />
        ]}
      />
    );
  }

}

export default connect(null, { createBicycle })(AddBicycle);