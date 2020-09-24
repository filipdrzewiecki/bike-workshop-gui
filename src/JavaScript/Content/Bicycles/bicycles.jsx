import '../../Css/index.css';
import React, { Component } from 'react';
import BicycleList from './bicycleList.jsx';
import ArticleBody from '../../Page/PageElements/article.jsx';

const buildState = () => ({
  bicycles: []
});


export default class Bicycles extends Component {

  constructor(props) {
    super(props)
    this.state = { ...buildState() }
  }
  
      componentDidMount() {
        fetch("http://localhost:9090/bicycles")
        .then(res => res.json())
        .then((data) => {
          this.setState({ bicycles: data })
        })
        .catch(console.log)
      }

      render() {
        return (
          <ArticleBody
            title="Rowery"
            paragraphs={[<div><BicycleList bicycles={this.state.bicycles} /></div>]}
            backButtonLink='/compatibility'
          />
        );
      }
    
}
