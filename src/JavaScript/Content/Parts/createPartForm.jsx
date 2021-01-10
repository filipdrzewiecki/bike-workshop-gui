import '../../Css/index.css';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as partTypes from './PART_TYPES.jsx';
import {mapCamelCase} from './stringUtils';

class CreatePartForm extends Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="error">{error}</div>
      )
    }
  }

  renderInput = ({ input, label, placeholder, meta }) => {
    return (
      <div className="Field">
        <input {...input} autoComplete="off" placeholder={placeholder} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  renderForm(sectionTitle, fields) {
    return (
      <div>
        <div className="part-section-title">
          {sectionTitle}
        </div>
        <div className="pageContent">
          {fields.map((field, i) =>
            <div className="contentField" key={i}>
              <div className="fieldName">{mapCamelCase(field)}:</div>
              <div className="fieldValue"><Field name={field} component={this.renderInput} /></div>
            </div>
          )}
        </div>
      </div>
    );
  }

  

  mapPart(part, formSpec) {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

          {formSpec.map((section, i) => (
            this.renderForm(section.name, section.fields)
          ))}
          <button className="button">{this.props.send}</button>
        </form>
      </div>
    );
  }

  render() {
    const spec = partTypes.findSpec(this.props.type);
    console.log("spec")
    console.log(spec.form)
    return this.mapPart(this.props.part, spec.form);
  }
}

const validate = (formValues) => {
  const errors = {};

  const required = 'Pole obowiązkowe';

  if (!formValues.name) {
    errors.name = required;
  }

  if (!formValues.brand) {
    errors.brand = required;
  }

  if (!formValues.model) {
    errors.model = required;
  }

  return errors;
}

export default reduxForm({
  form: 'partForm',
  validate: validate
})(CreatePartForm);