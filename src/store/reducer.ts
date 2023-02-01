import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export { rootReducer };
