import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
<<<<<<< HEAD
import authSlice from './slices/authSlice';
import {loadStateFromLocalStorage, localStorageMiddleware} from './middlewares/localStorageMiddleware';

const preloadedState = loadStateFromLocalStorage();
=======
import authSlice, { AuthState } from './slices/authSlice';

function loadState() {
  if (typeof window !== "undefined") {
    const persistedState = localStorage.getItem("reduxState");
    if (persistedState) {
      return JSON.parse(persistedState);
    }
  }
  return {}; 
}

>>>>>>> 01bb2b1 (deploy)

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
<<<<<<< HEAD
  getDefaultMiddleware()
  .concat(apiSlice.middleware)
  .concat(localStorageMiddleware),
preloadedState,
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
=======
    getDefaultMiddleware()
      .concat(apiSlice.middleware),
      preloadedState: loadState() as { auth: AuthState },
});

store.subscribe(() => {
  if (typeof window !== "undefined") {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  }
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];




// import { configureStore } from "@reduxjs/toolkit";
// import userReducer, { UserState } from "./userSlice";

// // Function to load the state from localStorage
// function loadState() {
//   if (typeof window !== "undefined") {
//     // Check if running on the client
//     const persistedState = localStorage.getItem("reduxState");
//     if (persistedState) {
//       return JSON.parse(persistedState);
//     }
//   }
//   return {}; // Return empty state if not on the client or no state in localStorage
// }

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
//   preloadedState: loadState() as { user: UserState },
// });

// // Subscribe to store updates to save state to localStorage
// store.subscribe(() => {
//   if (typeof window !== "undefined") {
//     // Ensure code runs only on the client
//     localStorage.setItem("reduxState", JSON.stringify(store.getState()));
//   }
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
>>>>>>> 01bb2b1 (deploy)
