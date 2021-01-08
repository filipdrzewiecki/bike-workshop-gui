import '../../Css/index.css';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldForm from './Field';


class CreatePartForm extends Component {

  renderFrameFields() {
    const part = {};

    const id = <FieldForm name='id' value={part.productId} formValue='productId' />
    const brand = <FieldForm name='Marka' value={part.brand} formValue='brand' />
    const model = <FieldForm name='Model' value={part.model} formValue='model' />
    const series = <FieldForm name='Seria' value={part.series} formValue='series' />
    const year = <FieldForm name='Rok' value={part.year} formValue='year' />

    const type = <FieldForm name='Typ' value={part.purpose} formValue='purpose' />
    const size = <FieldForm name='Rozmiar' value={part.size} formValue='size' />
    const weight = <FieldForm name='Waga' value={part.weight} formValue='weight' />
    const wheelSize = <FieldForm name='wheelSize' value={part.wheelSize} formValue='wheelSize' />

    const bbType = <FieldForm name='Typ' value={part.bottomBracketType} formValue='bottomBracketType' />
    const bbSize = <FieldForm name='Wymiary' value={part.bottomBracketSize} formValue='bottomBracketSize' />

    const forkTubeType = <FieldForm name='Taper' value={part.forkTubeType} formValue='forkTubeType' />
    const headsetType = <FieldForm name='Stery' value={part.headsetType} formValue='headsetType' />

    const rearWheelAxleSize = <FieldForm name='Tylna oś' value={part.rearWheelAxleSize} formValue='rearWheelAxleSize' />
    const brakeType = <FieldForm name='Typ hamulca' value={part.brakeType} formValue='brakeType' />
    
    const seatpostCaliperDiameter = <FieldForm name='Zacisk sztycy' value={part.seatpostCaliperDiameter} formValue='seatpostCaliperDiameter' />
    const seatpostSize = <FieldForm name='Wymiar sztycy' value={part.seatpostSize} formValue='seatpostSize' />

    return ([
      this.renderForm('Produkt', [id, brand, model, series, year]),
      this.renderForm('Ogólne', [type, size, weight, wheelSize]),
      this.renderForm('Suport', [bbType, bbSize]),
      this.renderForm('Rura sterowa', [forkTubeType, headsetType]),
      this.renderForm('Inne', [rearWheelAxleSize, brakeType, seatpostCaliperDiameter, seatpostSize])
    ]);
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
              <div className="fieldName">{field.props.name}:</div>
              <div className="fieldValue"><Field name={field.props.formValue} component={this.renderInput}/></div>
            </div>
          )}
        </div>
      </div>
    );
  }

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

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          {this.renderFrameFields().map((paragraph, i) => <div key={i}> {paragraph}</div>)}
          <br></br>

          <button className="button">{this.props.send}</button>
        </form>
      </div>
    );
  }



  renderFields() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="brand" component={this.renderInput} label={"Marka"} placeholder="np. Kross, Scott" />
          <Field name="series" component={this.renderInput} label={"Model"} placeholder="np. Scale, Level" />
          <Field name="year" component={this.renderInput} label={"Rocznik"} placeholder="data produkcji roweru lub ramy" />
          <Field name="weight" component={this.renderInput} label={"Waga"} placeholder="np. 12.7" />
          <div className="Field">
            <label>Typ</label>
            <Field name="purpose" component="select" label={"Typ"} defaultValue={'DEFAULT'}>
              <option defaultValue="DEFAULT" disabled selected>Wybierz typ</option>
              <option value="XC">Rower górski</option>
              <option value="ROAD">Rower szosowy</option>
            </Field>
          </div>

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
  form: 'partForm',
  validate: validate
})(CreatePartForm);