import { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import CardsList from "./components/CardsList";
import { getCards } from "./redux/actions/repos";
import styles from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <Router>
      <div className={styles.app}>
        <CardsList />
        <Switch>
          {/* <Route exact path="/card/:cardId?">
            <Route path="/card/:cardId" component={() => <CardDetails />} />
          </Route>
          <Redirect exact from="/" to="/card/" /> 
          <Route />*/}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
