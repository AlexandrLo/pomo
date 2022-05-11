import React from "react";
import ReactDOM from "react-dom";

import "focus-visible/dist/focus-visible";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import { customLocalStorageManager } from "utils/customLocalStorageManager";
import theme from "theme";
import { persistor, store } from "store";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider
          theme={theme}
          colorModeManager={customLocalStorageManager}
        >
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
