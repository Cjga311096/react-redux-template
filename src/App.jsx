import React from "react";
import { Provider } from "react-redux";

import Routes from "./routes";

import "./App.css";

function App(props) {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <Routes store={store} history={history} />
    </Provider>
  );
}

export default App;
