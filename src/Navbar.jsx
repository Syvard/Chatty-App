import React, {Component} from 'react';

class Navbar extends Component {
    render() {
      return (
        <div className="message announcement">
          <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <h4 className="navbar-users">{this.props.users} users online</h4>
          </nav>
        </div>
      );
    }
  }
  export default Navbar;