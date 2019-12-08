import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

import Home from 'views/Home/Home';
import Product from 'views/Product/Product';
import HowToRent from 'views/HowToRent';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/howtorent" component={HowToRent} />
      <Route 
        path="/product/:id" 
        render={(props) =>
          <Product id={props.match.params.id} />} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);






