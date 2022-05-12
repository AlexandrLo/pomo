import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

import settingsReducer from "./slices/settingsSlice";
import timerReducer from "./slices/timerSlice";

const persistConfig = {
  key: "pomo.v2",
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
