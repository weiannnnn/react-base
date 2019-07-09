import React, { Component } from 'react';
import '../styles/sass/general.sass';
import '../styles/sass/notifications.sass';
import Notifications from '../components/Notifications';
import ContentExampleOne from '../components/ContentExampleOne';
import NavBar from '../components/NavBar';

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
          isOpenContentOne: true,
          currentPage: "",
          previousPage: "",
        };
    }

    // Change modal page view based on user selection
    changePageView = (previousPage, currentPage) => {
        this.setState({currentPage: currentPage});
        this.setState({previousPage: previousPage});
        switch (currentPage) {
            case 'ContentOne': 
                this.setState({isOpenContentOne: true});
                break;
            default:
                console.error("Error - page not found")
        }
    }

    render() {
      return (
          <>
            <NavBar />               
            <div className="notification-section">
                <Notifications />
            </div>
            <div className="main-content-section">
                {this.state.isOpenContentOne && <ContentExampleOne changePageView={this.changePageView}/>}
            </div>
        </>
      );
    }
}