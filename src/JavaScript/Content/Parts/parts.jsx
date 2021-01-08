import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/menu.jsx';
import { Link } from "react-router-dom";
import * as partTypes from './PART_TYPES.jsx';

export default class Parts extends Component {

  renderPartTypes() {
    const parts = partTypes.PART_LIST;
    return ([
      <React.Fragment>
        {
          parts.map((part, i) => (
            <Link to={`/parts/${part}`} key={i}><div className="bicycle"><h2>{part}</h2></div></Link>
          ))
        }
      </React.Fragment>
    ])
    };

  render() {
    return (
      <ArticleBody
        isBackButton='false'
        title="Katalog części"
        secondaryTitle="Zdefiniowane części o potwierdzonych konfiguracjach"
        paragraphs={this.renderPartTypes()}
      />
    );
  }
}