import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import ReactRoutes from "./ReactRoutes/ReactRoutes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-[1200px] mx-auto">
      <HelmetProvider>
        <AuthProvider>

        <BrowserRouter>
          <ReactRoutes></ReactRoutes>
        </BrowserRouter>
        </AuthProvider>
      </HelmetProvider>
    </div>
  </StrictMode>
);
