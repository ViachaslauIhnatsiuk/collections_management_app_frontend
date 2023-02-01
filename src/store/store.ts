import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();

export type { RootState, AppDispatch };
export { store, useAppDispatch };
