import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "store";
import en from "../src/locale/en";
import App from "components/App";
import SelectedIntlProvider from "./SelectedIntlProvider";

const Root = () => {
  return (
    <Provider store={store}>
      <SelectedIntlProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SelectedIntlProvider>
    </Provider>
  );
};

export default Root;
