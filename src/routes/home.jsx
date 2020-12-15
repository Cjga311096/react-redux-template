import { Route } from "react-router";
import CounterPage from "../containers/counter/Counter";
import Routes from "../constants/routes";

function HomeRoute() {
  return <Route exact path={Routes.HOME.path} component={CounterPage} />;
}

export default HomeRoute;
