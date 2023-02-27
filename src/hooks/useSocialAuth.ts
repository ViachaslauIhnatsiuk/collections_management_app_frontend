import { useState } from 'react';
import { BASE_URL } from '../constants/baseUrl';
import { auth, signInWithPopup } from '../firebase/firebase';
import { ICurrentUserState } from '../store/slices/authSlice/authModel';
import { setAuthState, signUp } from '../store/slices/authSlice/authSlice';
import { useAppDispatch } from '../store/store';
import { AuthProvider } from 'firebase/auth';

const useSocialAuth = () => {
  const [socialAuthError, setSocialAuthError] = useState<string>('');
  const dispatch = useAppDispatch();

  const setUserToDatabase = async (
    userName: string,
    userEmail: string,
    userToken: string,
  ): Promise<void> => {
    const response = await fetch(`${BASE_URL}/users`);
    const users: ICurrentUserState[] = await response.json();

    const usersEmails = users.map((user) => user.email);

    if (!usersEmails.includes(userEmail)) {
      const signUpData = {
        name: userName,
        email: userEmail,
        password: 'Password123!',
      };

      dispatch(signUp(signUpData));
    } else {
      const authUser = users.find((user) => user.email === userName) as ICurrentUserState;
      const currentUser = { ...authUser, token: userToken };

      dispatch(setAuthState(currentUser));
    }
  };

  const signInWithProvider = async (provider: AuthProvider): Promise<void> => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      const { displayName, providerData, email, refreshToken } = user;

      const userEmail = (providerData[0].email as string) || (email as string);
      const userName = (providerData[0].displayName as string) || (displayName as string);

      setUserToDatabase(userName, userEmail, refreshToken);
    } catch {
      setSocialAuthError('Social auth error');
    }
  };

  return { signInWithProvider, socialAuthError };
};

export { useSocialAuth };
