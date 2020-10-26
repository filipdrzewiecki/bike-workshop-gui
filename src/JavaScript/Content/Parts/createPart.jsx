import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/article.jsx';
import { connect } from 'react-redux';
import { createPart } from '../apis/api-router';
import PartForm from './createPartForm';

class CreatePart extends Component {

  onSubmit = (formValues) => {
    this.props.createPart(this.props.match.params.type, formValues);
  }

  render() {
    const type = this.props.match.params.type;
    return (
      <ArticleBody
        title={`Dodaj ${type}`}
        backButtonLink={`/parts/${type}`}
        paragraphs={[
          <PartForm onSubmit={this.onSubmit} send="Dodaj" type={this.props.match.params.type}/>
        ]}
      />
    );
  }

}

export default connect(null, { createPart })(CreatePart);