import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import sampleReducer from './reducers/sampleReducer';
import Routes from './config/Routes';

require('./styles/sass/main.sass');


const store = createStore(combineReducers({ testAttr: sampleReducer }), { testAttr: 'React Base' });

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, document.getElementById('root')
);

module.hot.accept();
