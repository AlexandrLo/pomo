import React from "react";
import { createRoot } from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";

import App from "./App";
import ThemeProvider from "components/ThemeProvider";
import { persistor, store } from "store";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </HelmetProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
);
