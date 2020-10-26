import '../../Css/index.css';
import React from 'react';


export default class Field extends React.Component {

  render() {
    return (
      {
          name: this.props.name,
          value: this.props.value,
          formValue: this.props.formValue
      }
    );
  }

}