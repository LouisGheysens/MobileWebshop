import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "./counter/slice";
import { reducer as favoritesReducer } from "./favorites/slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const persistConfig = {
  key: "state",
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  count: counterReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Workaround non-serializable state middleware ERROR
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
