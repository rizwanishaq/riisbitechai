import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import LocationContextProvider from "./contexts/LocationContext";
import DeviceContextProvider from "./contexts/DeviceContext";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DeviceContextProvider>
        <LocationContextProvider>
          <App />
        </LocationContextProvider>
      </DeviceContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
