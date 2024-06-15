import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster
      position="bottom-left"
      toastOptions={{
        style: {
          paddingInline: 14,
          paddingBlock: 10,
          margin: "auto",
          width: "auto",
        },
      }}
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
