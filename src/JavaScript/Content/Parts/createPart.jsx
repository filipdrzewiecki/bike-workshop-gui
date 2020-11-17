import '../../Css/index.css';
import React, { Component } from 'react';
import Body from '../../Page/PageElements/menu.jsx';
import { connect } from 'react-redux';
import { createPart } from '../apis/api-router';
import PartForm from './createPartForm';

class CreatePart extends Component {

  onSubmit = (formValues) => {
    this.props.createPart(this.props.match.params.part, formValues);
  }

  render() {
    const type = this.props.match.params.part;
    return (
      <Body
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