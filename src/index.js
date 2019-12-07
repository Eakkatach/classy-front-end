import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

import Home from 'views/Home/Home';
import Product from 'views/Product';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/product" component={Product} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);






