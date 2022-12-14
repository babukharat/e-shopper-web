import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
// import '../node_modules/bootstrap'
// import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="container bg-light">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </>
);
