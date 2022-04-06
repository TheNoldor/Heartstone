import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import CardsList from "./components/CardsList";
import CardDetails from "./components/CardDetails";

import styles from "./App.module.scss";

const App = () => (
  <Router>
    <div className={styles.App}>
      <CardsList />
      <Switch>
        <Route exact path="/card/:id?">
          <Route path="/card/:id" component={() => <CardDetails />} />
        </Route>
        <Redirect exact from="/" to="/card/" />
        <Route />
      </Switch>
    </div>
  </Router>
);

export default App;
