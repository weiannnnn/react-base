import React, { Component } from 'react';
import '../styles/sass/login.sass';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="login-page-wrapper">
                <div className="content-wrapper">
                    <div className="input-field-wrapper">
                        <input className="input-field" type="text" name="username" placeholder="Username/Email"/>
                        <input className="input-field" type="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="login-btn-wrapper">
                        <button onClick={() => this.props.history.push('/homepage')}>Log In</button>
                    </div>
                </div>
            </div>
        );
    }
}