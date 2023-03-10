import ReactDOM from "react-dom/client";
import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";

import { App } from "components/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="todo-beep">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
