import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
store.dispatch({
  type: "ADDED_TO_WATCHLIST",
  payload: {
    added: true,
  },
});
console.log(store);
root.render(
  <Router>
    <App />
  </Router>
);
