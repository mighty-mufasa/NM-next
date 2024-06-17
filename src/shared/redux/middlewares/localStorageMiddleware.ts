import { Middleware } from '@reduxjs/toolkit';

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);
    if (typeof window !== 'undefined') {
      localStorage.setItem('authState', JSON.stringify(store.getState().auth));
    }

    return result;
  };

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return undefined;
    }
    const parsedState = JSON.parse(serializedState);
    return { auth: parsedState.auth };
  } catch (err) {
    return undefined;
  }
};
