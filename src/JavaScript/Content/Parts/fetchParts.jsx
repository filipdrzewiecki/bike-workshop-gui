import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/article.jsx';
import { Link } from "react-router-dom";
import { fetchParts } from "../apis/api-router.jsx"
import { connect } from 'react-redux';

class FetchParts extends Component {

    componentDidMount() {
        this.props.fetchParts(this.props.match.params.part);
    }

    capitalizeFirstLetter(string) {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);

        }
    }

    renderPartsList(parts) {
        return (
            <div>
                {parts.map((part) => (
                    <Link to={`/parts/${part.product}/${part.productId}`} key={part.id}>
                        <div className="bicycle" >
                            <h2>{part.brand} {part.model} {part.year}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        )
    };

    render() {
        if (Array.isArray(this.props.parts) && this.props.parts.length) {
            return (
                <ArticleBody
                    backButtonLink={`/parts`}
                    title={this.capitalizeFirstLetter(this.props.match.params.part)}
                    paragraphs={[
                        <Link to={`/parts/${this.props.match.params.part}/new`} ><div className="bicycle"><h2> Dodaj + </h2></div></Link>,
                        <div> {this.renderPartsList(this.props.parts)}</div>,
                    ]}
                />
            );
        }
        return 'Loading';
    }
}

const mapStateToProps = (state) => {
    const parts = state.parts.parts;
    return { parts: parts }
}

export default connect(mapStateToProps, { fetchParts })(FetchParts);