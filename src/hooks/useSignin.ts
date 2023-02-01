import { useState } from 'react';
import { BASE_URL } from '../constants/baseUrl';

const useSignin = () => {
  const [error, setError] = useState<Error | null>(null);

  const signIn = async (email: string, password: string): Promise<void> => {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const user = await response.json();

    if (!response.ok) {
      setError(user.error);
    }

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(user));
      // setIsAuth(true);
    }
  };

  return { signIn, error };
};

export { useSignin };
