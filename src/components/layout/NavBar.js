import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ icon, title }) => {
  return (
    <nav className='navbar navbar-default bg-primary'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <span className='navbar-brand'>
            <i class={icon}> {title}</i>
          </span>
        </div>
        <ul className='nav navbar-nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

NavBar.defaultProps = {
  title: "GitHub Finder",
  icon: "font fa-github",
};

// basic typechecking
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavBar;
