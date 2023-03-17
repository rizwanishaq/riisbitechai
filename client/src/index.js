import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import LocationContextProvider from "./contexts/LocationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocationContextProvider>
      <App />
    </LocationContextProvider>
  </React.StrictMode>
);
