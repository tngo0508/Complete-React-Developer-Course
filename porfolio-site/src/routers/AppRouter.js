import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import PorfolioItemPage from "../components/PorfolioItemPage";
import PorfolioPage from "../components/PorfolioPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/porfolio/:id" component={PorfolioItemPage} />
        <Route exact path="/porfolio" component={PorfolioPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
