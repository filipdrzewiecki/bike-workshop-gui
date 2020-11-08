import '../../Css/index.css';
import './fetchParts.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { fetchParts, fetchPartsWithFilters } from "../apis/api-router.jsx"
import { connect } from 'react-redux';
import IconGoBack from '../../../resources/icon/go-back.png';

class FetchParts extends Component {

    constructor(props) {
        super(props);
        this.state = { brand: null };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchPartsWithFilters(this.props.match.params.part, this.state.brand);
    }

    handleChange(event) {
        event.preventDefault()

        this.setState({ brand: event.target.value });
    }

    capitalizeFirstLetter(string) {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);

        }
    }

    renderPartsList(parts) {
        return (
            <div>
                <div className="bar-main">
                    <div className="cell"> Marka </div>
                    <div className="cell"> Model </div>
                    <div className="cell"> Rok </div>
                    <div className="cell"> Rozmiar </div>
                </div>
                {parts.map((part) => (
                    <Link to={`/parts/${part.product}/${part.productId}`} key={part.id}>
                        <div className="bar">
                            <div className="cell"> {part.brand} </div>
                            <div className="cell"> {part.model} </div>
                            <div className="cell"> {part.year} </div>
                            <div className="cell"> {part.size} </div>

                        </div>
                    </Link>
                ))}
            </div>
        )
    };

    handleSubmit(event) {
        event.preventDefault();
    }

    renderSearchBoxes() {
        return (
            <React.Fragment>
                <div className="searchBox">
                    <label for="fname">Marka:</label>
                    <br></br>
                    <input type="text" id="fname" name="brand" value={this.state.brand} onChange={this.handleChange} />
                </div>
                <div className="searchBox">
                    <label for="fname">Model:</label>
                    <br></br>
                    <input type="text" id="fname" name="model" />
                </div>
                <div className="searchBox">
                    <label for="fname">Rozmiar ramy:</label>
                    <br></br>
                    <input type="text" id="fname" name="year" />
                </div>
                <div className="searchBox">
                    <label for="fname">Typ:</label>
                    <br></br>
                    <input type="text" id="fname" name="size" />
                </div>
            </React.Fragment>
        )
    }

    renderList() {
        if (Array.isArray(this.props.parts) && this.props.parts.length) {
            return this.renderPartsList(this.props.parts);
        }
        return []
    }

    render() {

        const list = this.renderList();

        console.log(this.props.parts)
        return (
            <div>

                <div className="page-top">
                    <div className="page-title-container">
                        <div className="page-title">
                            <div className="primary">{this.capitalizeFirstLetter(this.props.match.params.part)}</div>
                        </div>
                        <div className="go-back-button">
                            <Link to={`/parts`}><img src={IconGoBack} alt="GoBack" ></img></Link>
                        </div>
                    </div>
                    <div className="pageContentMenu">
                    </div>
                </div>


                <div className="page-mid">

                    <form onSubmit={this.handleSubmit}>
                        <div className="searchSection">
                            <div className="searchBoxes">
                                {this.renderSearchBoxes()}
                            </div>
                            <div className="search-button-container">
                                <button onClick={() => this.props.fetchPartsWithFilters(this.props.match.params.part, this.state.brand)} className="search-button">SZUKAJ</button>
                            </div>
                        </div>
                    </form>

                </div>

                <div className="page-bottom">
                    <div>
                        <div className="yelloLink"><Link to={`/parts/${this.props.match.params.part}/new`} >NOWY + </Link></div>
                        {list.map((paragraph, i) => <div key={i} className="section">{paragraph}</div>)}
                    </div>

                </div>
            </div>

        );
    }
}



const mapStateToProps = (state) => {
    const parts = state.parts.parts;

    return { parts: parts }
}

export default connect(mapStateToProps, { fetchParts, fetchPartsWithFilters })(FetchParts);