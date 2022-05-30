import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { theme } from "./theme";
import App from "./App";

axios.defaults.baseURL = "http://localhost:8181/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
