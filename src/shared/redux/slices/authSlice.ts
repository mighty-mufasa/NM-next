import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { UserData } from '@/shared/lib/localstorage';

<<<<<<< HEAD
interface AuthState {
=======
export interface AuthState {
>>>>>>> 01bb2b1 (deploy)
  user: UserData | null;
  isSignedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isSignedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthInfo: (
      state,
<<<<<<< HEAD
      action: PayloadAction<{ user: UserData | null; isSignedIn: boolean }>,
=======
      action: PayloadAction<AuthState>,
>>>>>>> 01bb2b1 (deploy)
    ) => {
      state.user = action.payload.user;
      state.isSignedIn = action.payload.isSignedIn;
    },
  },
});

export const { setAuthInfo } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
