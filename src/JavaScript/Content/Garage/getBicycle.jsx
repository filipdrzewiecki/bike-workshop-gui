import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/article.jsx';
import { getBicycle } from "../apis/api-router.jsx"
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Bicycle extends Component {

  componentDidMount() {
    this.props.getBicycle(this.props.match.params.id);
  }

  render() {
    if (!this.props.bicycle) {
      return <div>Loading...</div>
    }
    return <ArticleBody
      backButtonLink='/garage'
      title={this.props.bicycle.name}
      secondaryTitle={<div>{this.props.bicycle.brand} {this.props.bicycle.model} {this.props.bicycle.year}</div>}
      paragraphs={[
        <div>Typ: {this.props.bicycle.type}</div>,
        <div>Waga: {this.props.bicycle.predefinedWeight}</div>,

        <div className="bicycle-actions">
          <Link className="button" to={`/garage/${this.props.bicycle.id}/edit`}>Edytuj</Link>
          <Link className="button" to={`/garage/${this.props.bicycle.id}/delete`}>Usuń</Link>
        </div>
      ]}
    />
  }
}

const mapStateToProps = (state, ownProps) => {
  return { bicycle: state.bicycles[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { getBicycle })(Bicycle);