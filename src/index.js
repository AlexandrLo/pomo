import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "theme";
import { store, persistor } from "app/store";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
