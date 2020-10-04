import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/article.jsx';



export default class Bicycles extends Component {

      render() {
        return (
          <ArticleBody
            title="Rowery"
            paragraphs={[<div>Sekcja z gotowymi rowerami firm</div>]}
          />
        );
      }
    
}
