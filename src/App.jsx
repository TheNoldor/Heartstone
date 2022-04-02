import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import CardsList from "./Components/CardsList";
import CardDetails from "./Components/CardDetails";

import "./Components/CardsList/cardlistitem.scss";
import "./Components/CardsList/styles.scss";
import "./Components/CardDetails/styles.scss";
import "./App.scss";
import "./Components/Navbar/styles.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <CardsList />
        <Switch>
          <Route exact path="/card/:id?">
            <Route
              exact
              path="/client"
              component={() => <div>Выберете клиента</div>}
            />
            <Route path="/card/:id" component={() => <CardDetails />} />
          </Route>
          <Redirect exact from="/" to="/card/" />
          <Route />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
