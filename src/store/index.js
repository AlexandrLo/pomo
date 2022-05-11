import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import settingsReducer from "./slices/settingsSlice";
import timerReducer from "./slices/timerSlice";

const persistConfig = {
  key: "pomo",
  storage,
};

const settingsPersistedReducer = persistReducer(persistConfig, settingsReducer);

const store = configureStore({
  reducer: {
    settings: settingsPersistedReducer,
    timer: timerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

export default store;
