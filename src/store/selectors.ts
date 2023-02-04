import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const selectUser = (state: RootState) => state.user;
const selectCollections = (state: RootState) => state.collections;
const selectItems = (state: RootState) => state.items;

export { useAppSelector, selectUser, selectCollections, selectItems };
