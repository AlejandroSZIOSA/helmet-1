import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//1 Helmet provider
import { HelmetProvider } from "react-helmet-async";
//2 router Change name to Router :)
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </HelmetProvider>
);
