import React, { Component } from 'react';
import logo from '../images/logo.png'
import menuButton from '../images/menu_button.png'
import closeIcon from '../images/close_icon_white.svg';
import { withRouter } from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount= this.componentDidMount.bind(this);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
    }

    toggleMenu = () => {
        this.setState({isOpen: !this.state.isOpen});
    }
    
    render() {
        return (
        <>
            <nav className="main-navbar navbar-expand-md fixed-top">
                <div className="navbar-content">
                    <div className="navbar-left">
                        <a href="/"><img className="logo" src={logo}/></a>
                    </div>
                    <div className="navbar-right">
                        <div className="burger-menu-icon-wrapper" onClick={() => this.toggleMenu()}>
                            <img src={menuButton}/>
                        </div>
                        <div className={this.state.isOpen ? 'burger-menu show' : 'burger-menu hide'}>
                            <img className="modal-close-button-burger-menu" onClick={() => this.toggleMenu()} src={closeIcon}></img>
                            <ul><a onClick={() => this.props.history.push('/homepage')}>Home</a></ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
        );
    }
}

export default withRouter(NavBar)