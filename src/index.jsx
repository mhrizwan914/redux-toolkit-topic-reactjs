// React
import React from "react";
import ReactDOM from "react-dom/client";
// Component
import App from "./App.jsx";
// Css
import "./global.css";
// Redux
import { Provider } from "react-redux";
import store from "./store/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)