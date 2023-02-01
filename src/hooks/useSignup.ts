import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/baseUrl';
import { useAppDispatch } from '../store/store';
import { setUserState } from '../store/slices/userSlice/userSlice';

const useSignup = () => {
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const signUp = async (name: string, email: string, password: string): Promise<void> => {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const user = await response.json();

    if (!response.ok) {
      setError(user.error);
    }

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(setUserState(user));
      navigate('/');
      window.location.reload();
    }
  };

  return { signUp, error };
};

export { useSignup };
