import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {

    constructor() {
        super();
        this.state = {
            mobileNavOpen : false
        };

    }

    componentDidUpdate() {
        if(this.state.mobileNavOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }


    handleNavButtonClick() {
        this.toggleNavMenu();
    }

    toggleNavMenu() {
        this.setState({mobileNavOpen: !this.state.mobileNavOpen});
    }

    closeNavMenu() {
        this.setState({mobileNavOpen: false});
    }

    render(){
        return (
            <div className="navmenu-container">
                <div className="btn hidden-desktop btn--navmenu"
                     role="button"
                     tabIndex={0}
                     aria-controls="sp-navigation"
                     aria-expanded={this.state.mobileNavOpen}
                onClick={this.handleNavButtonClick.bind(this)}>
                    <span className="sr-only">Toggle navigation</span>
                    <div className="btn--navmenu__bar"/>
                    <div className="btn--navmenu__bar"/>
                    <div className="btn--navmenu__bar"/>
                </div>
                <nav id="sp-navigation"
                     className={`navmenu ${this.state.mobileNavOpen ? 'navmenu--mobile-open' : ''}`}
                     aria-expanded={this.state.mobileNavOpen}>
                    <NavLink to="/" className="navmenu__link" exact activeClassName="active" onClick={this.closeNavMenu.bind(this)}>Home</NavLink>
                    <NavLink to="/about" className="navmenu__link" activeClassName="active" onClick={this.closeNavMenu.bind(this)}>About</NavLink>
                    <NavLink to="/portfolio" className="navmenu__link" activeClassName="active" onClick={this.closeNavMenu.bind(this)}>Portfolio</NavLink>
                </nav>
            </div>

        )
    }
}

export default Navigation;