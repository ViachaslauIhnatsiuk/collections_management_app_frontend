import { resetAuthState } from '../store/slices/authSlice/authSlice';
import { resetCollectionsState } from '../store/slices/collectionSlice/collectionSlice';
import { resetItemsState } from '../store/slices/itemSlice/itemSlice';
import { resetUsersState } from '../store/slices/usersSlice/usersSlice';
import { useAppDispatch } from '../store/store';

const useResetState = () => {
  const dispatch = useAppDispatch();

  const resetAppState = () => {
    dispatch(resetAuthState);
    dispatch(resetUsersState);
    dispatch(resetCollectionsState);
    dispatch(resetItemsState);
  };

  return resetAppState;
};

export { useResetState };
