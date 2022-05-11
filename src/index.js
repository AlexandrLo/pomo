import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "theme";
import { store, persistor } from "store";
import { PersistGate } from "redux-persist/integration/react";

import { customLocalStorageManager } from "customLocalStorageManager";
import App from "./App";

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
