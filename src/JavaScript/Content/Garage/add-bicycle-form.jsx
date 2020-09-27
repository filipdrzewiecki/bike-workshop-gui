import '../../Css/index.css';
import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class AddBicycleForm extends Component {

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
      this.props.onSubmit(formValues);
    }

    render() {
        return (
              <div>
                  <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                      <Field name="name" component={this.renderInput} label={"Nazwa"}/>
                      <Field name="brand" component={this.renderInput} label={"Marka"}/>
                      <Field name="model" component={this.renderInput} label={"Model"}/>
                      <Field name="year" component={this.renderInput} label={"Rocznik"}/>
                      <Field name="predefinedWeight" component={this.renderInput} label={"Waga"}/>
                      <Field name="type" component={this.renderInput} label={"Typ"}/>
                      <button className="button">Dodaj</button>
                  </form>
              </div>
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

export default reduxForm({
      form: 'bicycleForm',
      validate: validate
  })(AddBicycleForm);