import React from "react";
import Layout from "layout";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Layout />
      </Provider>
    </>
  );
};

export default App;
