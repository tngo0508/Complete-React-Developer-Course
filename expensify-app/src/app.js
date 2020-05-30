import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
const NotFoundPage = () => <div>404!</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddDashboardPage} />
      <Route path="/edit" component={EditDashboardPage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
