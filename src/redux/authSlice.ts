import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface LoginStartAction {
  type: 'auth/loginStart';
}

export interface LoginSuccessAction {
  type: 'auth/loginSuccess';
  payload: { token: string };
}

export interface LoginFailureAction {
  type: 'auth/loginFailure';
  payload: { error: string };
}

export interface LogoutAction {
  type: 'auth/logout';
}

type Product = {
  id: number;
  title: string;
};

type User = {
  address: string;
  birthday: string;
  name: string;
};

type LoginPayload = {
  products: Product[];
  user: User;
};

interface AuthState {
  isLoading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  products: Product[];
  user: User | null;
}

const initialState: AuthState = {
  isLoading: false,
  error: null,
  isLoggedIn: false,
  products: [],
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
      state.isLoggedIn = false;
      state.products = [];
      state.user = null;
    },
    loginSuccess(state, action: PayloadAction<LoginPayload>) {
      state.isLoading = false;
      state.error = null;
      state.isLoggedIn = true;
      state.products = action.payload.products;
      state.user = action.payload.user;
    },
    loginFailure(state, action: PayloadAction<{ error: string }>) {
      state.isLoading = false;
      state.error = action.payload.error;
      state.isLoggedIn = false;
      state.products = [];
      state.user = null;
    },
    logout(state) {
      state.isLoading = false;
      state.error = null;
      state.isLoggedIn = false;
      state.products = [];
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export const selectAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
