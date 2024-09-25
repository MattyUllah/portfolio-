
import PropTypes from "prop-types";

import "../App.css";

const Navbar = (props) => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href="index.html">
            {props.firstName}
            {props.lastName}
          </a>
        </div>
        
        <ul className="menu">
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          
          <li>
            <a href="#contact" className="navbar-btn">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Navbar;
