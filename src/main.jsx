import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import ReactRoutes from "./ReactRoutes/ReactRoutes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-[1250px] mx-auto">
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <AuthProvider>
            <BrowserRouter>
              <ReactRoutes></ReactRoutes>
            </BrowserRouter>
          </AuthProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>
);
