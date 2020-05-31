import React from "react";
import { Link } from "react-router-dom";

const PorfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Checkout the stuff I've done</p>
    <Link to="/porfolio/1">Item One</Link>
    <Link to="/porfolio/2">Item Two</Link>
  </div>
);

export default PorfolioPage;
