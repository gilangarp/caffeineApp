import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  </Provider>
);
