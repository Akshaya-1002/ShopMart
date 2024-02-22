import { configureStore } from "@reduxjs/toolkit";
import shopMartSliceReducer from "./shopMartSlice";
import {
  REHYDRATE,
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Configuration for Redux Persist
const persistConfig = {
  key: 'root', // Key for storage
  version: 1, // Version of persisted storage
  storage, // Storage method (defaults to localStorage)
};

// Wrap your root reducer with the persistReducer
const persistedReducer = persistReducer(persistConfig, shopMartSliceReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: { shopMart: persistedReducer }, // Set the reducer with persisted state
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, FLUSH, PAUSE, PERSIST, PURGE, REGISTER], // Ignore specific actions
      },
    }),
});

// Create a persistor instance
export let persistor = persistStore(store);

// Export the persistor for potential future use
