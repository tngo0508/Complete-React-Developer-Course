import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const AddDashboardPage = () => (
  <div>This is from my add dashboard component</div>
);
const EditDashboardPage = () => (
  <div>This is from my edit dashboard component</div>
);
const HelpPage = () => <div>This is from my help component</div>;
const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink exact to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink exact to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink exact to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route exact path="/create" component={AddDashboardPage} />
        <Route exact path="/edit" component={EditDashboardPage} />
        <Route exact path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
