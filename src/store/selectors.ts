import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const selectAuth = (state: RootState) => state.auth;
const selectUsers = (state: RootState) => state.users;
const selectCollections = (state: RootState) => state.collections;
const selectItems = (state: RootState) => state.items;

export { useAppSelector, selectAuth, selectUsers, selectCollections, selectItems };
