import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrentUserState } from './userModel';

const initialState = {
  isAuth: false,
  currentUser: {
    id: '',
    token: '',
    name: '',
    email: '',
    isBlocked: false,
    isAdmin: false,
    language: 'EN',
    theme: 'light',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState: (state, { payload: user }: PayloadAction<ICurrentUserState>) => {
      state.isAuth = true;
      const { currentUser } = state;
      const { id, token, name, email, isBlocked, isAdmin, language, theme } = user;
      currentUser.id = id;
      currentUser.token = token;
      currentUser.name = name;
      currentUser.email = email;
      if (isBlocked) currentUser.isBlocked = isBlocked;
      if (isAdmin) currentUser.isAdmin = isAdmin;
      if (language) currentUser.language = language;
      if (theme) currentUser.theme = theme;
    },
    resetUserState: () => initialState,
  },
});

export const { resetUserState, setUserState } = userSlice.actions;
export { userSlice };
