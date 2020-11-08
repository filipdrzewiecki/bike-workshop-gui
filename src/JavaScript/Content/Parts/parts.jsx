import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/menu.jsx';
import { Link } from "react-router-dom";

export default class Parts extends Component {

    renderPartTypes() {
      return ([
            <Link to={`/parts/frame`}><div className="bicycle"><h2>Rama</h2></div></Link>,
            <Link to={`/parts/fork`}><div className="bicycle"><h2>Widelec</h2></div></Link>,
            <Link to={`/parts/rearWheel`}><div className="bicycle"><h2>Koło tył</h2></div></Link>
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