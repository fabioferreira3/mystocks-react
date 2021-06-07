import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import PositionsPage from "./pages/PositionsPage";
import { PrivateRoute } from "./pages/Routes/PrivateRoute";
import TransactionsPage from "./pages/TransactionsPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/positions" />
        </Route>
        <PrivateRoute exact path="/positions" component={PositionsPage} />
        <PrivateRoute exact path="/transactions" component={TransactionsPage} />
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
