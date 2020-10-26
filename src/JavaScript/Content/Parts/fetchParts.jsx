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
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderBicycleList(parts) {
        if (!parts) {
            return "Loading:"
        }
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
        return (
            <ArticleBody
                backButtonLink={`/parts`}
                title={this.capitalizeFirstLetter(this.props.match.params.part)}
                paragraphs={[
                    <Link to={`/parts/${this.props.match.params.part}/new`} ><div className="bicycle"><h2> Dodaj + </h2></div></Link>,
                    <div> {this.renderBicycleList(this.props.parts)}</div>,
                ]}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return { parts: Object.values(state.parts)[0] }
}

export default connect(mapStateToProps, { fetchParts })(FetchParts);