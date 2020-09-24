import '../../Css/index.css';
import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import ArticleBody from '../../Page/PageElements/article.jsx';
import {connect} from 'react-redux';
import {createBicycle} from '../apis/api-router';

class AddBicycle extends Component {

renderError({ error, touched}) {
  if (touched && error) {
    return (
      <div className="error">{error}</div>
    )
  }
}

    renderInput = ({input, label, meta}) => {
      return (
      <div className="Field">
          <label>{label}</label>
          <input {...input} autoComplete="off"/>
          {this.renderError(meta)}
      </div>
      );
    }

    onSubmit = (formValues) => {
      this.props.createBicycle(formValues);
      console.log(formValues)
    }

    render() {
        return (
          <ArticleBody
            title="Dodaj rower"
            backButtonLink='/garage'
            paragraphs={[
              <div>
                  <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                      <Field name="name" component={this.renderInput} label={"Nazwa"}/>
                      <Field name="brand" component={this.renderInput} label={"Marka"}/>
                      <button className="button">Dodaj</button>
                  </form>
              </div>,
          ]}
          />
        );
      }
      
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'Podaj nazwę roweru';
  }

  if (!formValues.brand) {
    errors.brand = 'Podaj markę roweru';
  }

  return errors;
}


  const formWrapped = reduxForm({
      form: 'addBicycle',
      validate: validate
  })(AddBicycle);

  export default connect (null, {createBicycle} ) (formWrapped);