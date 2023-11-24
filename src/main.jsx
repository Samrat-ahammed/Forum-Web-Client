import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Router/Route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto">
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </React.StrictMode>
    </QueryClientProvider>
  </div>
);
