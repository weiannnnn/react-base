import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import LoginPage from '../screens/LoginPage';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={LoginPage} />
                    <Route exact path='/login' component={LoginPage} />
                    <Route exact path='/homepage' component={HomePage} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
