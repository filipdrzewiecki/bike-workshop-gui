import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/article.jsx';
import { Link } from "react-router-dom";
import { getBicycle } from "../apis/api-router.jsx"
import { connect } from 'react-redux';

const SingleBicycle = props => {
  return (
    <div>

    </div>
  );
};


class Bicycle extends Component {

  componentDidMount() {
    this.props.getBicycle(this.props.match.params.id);
  }

  render() {
    if (!this.props.bicycle) {
      return <div>Loading...</div>
    }
    return <ArticleBody
      title={this.props.bicycle.name}
      paragraphs={[
        <div>{this.props.bicycle.name}</div>
      ]}
    />
  }

}

const mapStateToProps = (state, ownProps) => {
  return { bicycle: state.bicycles[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { getBicycle })(Bicycle);