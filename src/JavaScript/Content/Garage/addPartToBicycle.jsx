import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/menu.jsx';
import { connect } from 'react-redux';
import { addPartToBicycle } from '../api/api-router';
import { getUserName } from '../../Page/Security/authHeader';
import AddFrameForm from './addPartToBicycleForm';

class AddPartToBicycle extends Component {

  onSubmit = (formValues) => {
    this.props.addFrameToBicycle(this.props.match.params.bike, formValues);
  }

  render() {
    return (
      <ArticleBody
        title="Dodaj ramę"
        backButtonLink={`/${getUserName()}/garage/${this.props.match.params.bike}`}
        paragraphs={[
          <AddFrameForm onSubmit={this.onSubmit} send="Dodaj" />
        ]}
      />
    );
  }

}

export default connect(null, { addPartToBicycle })(AddPartToBicycle);