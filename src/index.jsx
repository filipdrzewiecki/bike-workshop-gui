import './JavaScript/Css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from  './JavaScript/reducers/combine-reducers.jsx'
import reduxThunk from 'redux-thunk';
import App from './app.jsx';

const store = createStore(
    reducers, 
    compose(applyMiddleware(reduxThunk))
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);