let request = require('request-promise');
import React, { Component } from 'react';

export default class ContentExampleOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }; 
    }

    // componentDidMount() {
    //     let self = this;
    //     request({
    //         method: 'GET',
    //         uri: URL + "/API",
    //         json: true
    //     }).then(function (response) {
    //         return response;
    //     })
    //     .catch(function (err) {
    //         console.error("ERROR in API call", err)
    //     });
    // }

    render() {
        return (
            <div className="main-body-container">
                <div className="header-section">
                    <div className ="header-top"> 
                    <div className="header-together-left">
                        <div className="modal-title">Example Content</div>
                    </div> 
                    </div>
                </div>
            </div>
        );
    }
}
