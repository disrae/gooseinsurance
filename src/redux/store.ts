import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export default store;
