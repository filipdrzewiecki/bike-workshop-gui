import React from 'react';
import ReactDOM from 'react-dom';

import './JavaScript/Css/index.css';

import Navbar from './JavaScript/Page/Navbar/navbar';
import PageBody from './JavaScript/Page/PageElements/body';

import { Router } from "react-router-dom";
import Footer from './JavaScript/Page/PageElements/footer';
import SlidingNavbar from './JavaScript/Page/Navbar/slidingNavbar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from  './JavaScript/reducers/combine-reducers.jsx'
import reduxThunk from 'redux-thunk';
import history from './history';

class App extends React.Component {
    render() {
        return (
                <Router history={history}>
                    <SlidingNavbar />
                    <Navbar />
                    <PageBody />
                    <Footer />
                </Router>
        );
    }
}


ReactDOM.render(
    <Provider store={createStore(reducers, compose(applyMiddleware(reduxThunk)))}>
        <App />
    </Provider>,
    document.getElementById('root')
);