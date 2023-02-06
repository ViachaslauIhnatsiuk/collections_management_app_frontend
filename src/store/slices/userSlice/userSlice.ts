import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/baseUrl';
import { setError, setPending, setResolved } from './userHelpers';
import {
  ICurrentUserState,
  ISignUpData,
  ISignInData,
  UserErrors,
  IUserState,
} from './userModel';

const initialState: IUserState = {
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
  status: '',
  error: '',
};

const signUp = createAsyncThunk(
  'user/signUp',
  async (userData: ISignUpData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(UserErrors.signUp);
      }

      const newUser = await response.json();

      dispatch(setUserState(newUser));
    } catch (error) {
      return rejectWithValue(UserErrors.signUp);
    }
  },
);

const signIn = createAsyncThunk(
  'user/signIn',
  async (userData: ISignInData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(UserErrors.signIn);
      }

      const user = await response.json();

      dispatch(setUserState(user));
    } catch (error) {
      return rejectWithValue(UserErrors.signIn);
    }
  },
);

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
  extraReducers(builder) {
    builder.addCase(signUp.pending, setPending);
    builder.addCase(signIn.pending, setPending);

    builder.addCase(signUp.fulfilled, setResolved);
    builder.addCase(signIn.fulfilled, setResolved);

    builder.addCase(signUp.rejected, setError);
    builder.addCase(signIn.rejected, setError);
  },
});

export const { resetUserState, setUserState } = userSlice.actions;
export { userSlice, signUp, signIn };
