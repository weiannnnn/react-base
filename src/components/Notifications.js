import React, { Component } from 'react';

export default class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    toggleDropDown = () => {
        this.setState({showDropDown: !this.state.showDropDown})
    }

    render() {
        return (
            <div className="notification-content">
                <div className="notifications-title">
                    <div className="notifications-left">Liquid Studio London</div>
                    <div className={this.state.showDropDown ? "feed-icon up": "feed-icon down"} onClick={() => this.toggleDropDown()}/>
                </div>
                <div className= {this.state.showDropDown ? "notification-boxes-wrapper show" : "notification-boxes-wrapper"}>
                </div>
            </div>
        );
    }
}