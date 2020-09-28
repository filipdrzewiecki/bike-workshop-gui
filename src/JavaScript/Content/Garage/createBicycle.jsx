import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/article.jsx';
import {connect} from 'react-redux';
import {createBicycle} from '../apis/api-router';
import BicycleForm from './add-bicycle-form';

class AddBicycle extends Component {

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
                <BicycleForm onSubmit={this.onSubmit} send="Dodaj" />
          ]}
          />
        );
      }
      
}

  export default connect (null, {createBicycle} ) (AddBicycle);