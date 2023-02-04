import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice/userSlice';
import { collectionSlice } from './slices/collectionSlice/collectionSlice';
import { itemSlice } from './slices/itemSlice/itemSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  collections: collectionSlice.reducer,
  items: itemSlice.reducer,
});

export { rootReducer };
