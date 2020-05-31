import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Porfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact>
      Home
    </NavLink>
    <NavLink to="/porfolio" activeClassName="is-active" exact>
      Porfolio
    </NavLink>
    <NavLink to="/contact" activeClassName="is-active">
      Contact
    </NavLink>
  </header>
);

export default Header;
