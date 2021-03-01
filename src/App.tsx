import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Calc from "components/calc";

const App = () => {
  return (

    <Provider store={store}>
      <Calc />
    </Provider>

  );
};

export default App;
