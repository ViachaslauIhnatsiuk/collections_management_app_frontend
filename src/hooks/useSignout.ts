import { setSignOut } from '../store/slices/userSlice/userSlice';
import { useAppDispatch } from '../store/store';

const useSignout = () => {
  const dispatch = useAppDispatch();

  const signOut = (): void => {
    localStorage.removeItem('user');
    dispatch(setSignOut());
  };

  return { signOut };
};

export { useSignout };
