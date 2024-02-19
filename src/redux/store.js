import { configureStore } from "@reduxjs/toolkit";
import shopMartSliceReducer from "./shopMartSlice";
import {  REHYDRATE,
          persistStore,
          persistReducer,
          FLUSH,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
      } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, shopMartSliceReducer)

export const store = configureStore({
  // reducer: {
  //   shopMart: shopMartSliceReducer,
  //   // doubt
  // },
  reducer: {shopMart: persistedReducer},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck:{
      ignoredActions: [REHYDRATE, FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export let persistor = persistStore(store)


// react-persist is a tool used in React applications to save and restore the state of components even after the page is refreshed or reopened, ensuring a seamless user experience.