import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import LocationContextProvider from "./contexts/LocationContext";
import DeviceContextProvider from "./contexts/DeviceContext";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <DeviceContextProvider>
          <LocationContextProvider>
            <App />
          </LocationContextProvider>
        </DeviceContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
