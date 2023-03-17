import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import LocationContextProvider from "./contexts/LocationContext";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LocationContextProvider>
        <App />
      </LocationContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
