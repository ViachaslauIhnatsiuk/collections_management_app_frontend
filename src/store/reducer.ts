import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './slices/authSlice/authSlice';
import { usersSlice } from './slices/usersSlice/usersSlice';
import { collectionSlice } from './slices/collectionSlice/collectionSlice';
import { itemSlice } from './slices/itemSlice/itemSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  users: usersSlice.reducer,
  collections: collectionSlice.reducer,
  items: itemSlice.reducer,
});

export { rootReducer };
