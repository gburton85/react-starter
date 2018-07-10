import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {

    let menuActive = this.state.isToggleOn ? 'is-active' : '';

    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <div className="navbar-burger burger" onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={'navbar-end navbar-menu ' +menuActive}>
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/faq" className="navbar-item">Features</Link>
            <Link to="/faq" className="navbar-item">About</Link>
            <Link to="/faq" className="navbar-item">FAQ</Link>
        </div>
    </nav>
    );
  }
}

export default Header;
