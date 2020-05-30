import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
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

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route exact path="/create" component={AddDashboardPage} />
      <Route exact path="/edit" component={EditDashboardPage} />
      <Route exact path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
