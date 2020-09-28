import '../../Css/index.css';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddBicycleForm extends Component {

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
        <label>{label}</label>
        <input {...input} autoComplete="off" placeholder={placeholder}/>
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    console.log("Oto formularz", formValues)
    this.props.onSubmit(formValues);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="name" component={this.renderInput} label={"Nazwa"} placeholder="np. Błyskawica"/>
          <Field name="brand" component={this.renderInput} label={"Marka"} placeholder="np. Kross, Scott"/>
          <Field name="model" component={this.renderInput} label={"Model"} placeholder="np. Scale, Level"/>
          <Field name="year" component={this.renderInput} label={"Rocznik"} placeholder="data produkcji roweru lub ramy"/>
          <Field name="predefinedWeight" component={this.renderInput} label={"Waga"} placeholder="np. 12.7"/>
          <div className="Field">
            <label>Typ</label>
            <Field name="type" component="select" label={"Typ"}>
              <option value="" disabled selected>Wybierz typ</option>
              <option value="MOUNTAIN_BIKE">Rower górski</option>
              <option value="ROAD_BIKE">Rower szosowy</option>
            </Field>
          </div>

          <br></br>

          <div>
            <label htmlFor="hasEmail">Jest szybki?</label>
            <div>
              <Field name="hasEmail" id="hasEmail" component="input" type="checkbox" />
            </div>
          </div>

          <div></div>

          <br></br>

          <button className="button">{this.props.send}</button>
        </form>
      </div>
    );
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
  form: 'bicycleForm',
  validate: validate
})(AddBicycleForm);