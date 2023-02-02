import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice/userSlice';
import { collectionSlice } from './slices/collectionSlice/collectionSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  collections: collectionSlice.reducer,
});

export { rootReducer };
