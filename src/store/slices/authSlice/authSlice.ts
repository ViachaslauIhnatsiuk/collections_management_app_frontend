import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setError, setPending, setResolved } from './authHelpers';
import {
  ICurrentUserState,
  ISignUpData,
  ISignInData,
  AuthErrors,
  IAuthState,
  LanguageType,
  ThemeType,
} from './authModel';
import { BASE_URL } from '../../../constants/commonConstants';

const initialState: IAuthState = {
  isAuth: false,
  currentUser: {
    _id: '',
    token: '',
    name: '',
    email: '',
    isBlocked: false,
    isAdmin: false,
  },
  language: 'en',
  theme: 'light',
  status: '',
  error: '',
};

const signUp = createAsyncThunk(
  'auth/signUp',
  async (userData: ISignUpData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw error;
      }

      const newUser = await response.json();

      dispatch(setAuthState(newUser));
    } catch (error) {
      return rejectWithValue(`${AuthErrors.signUp}: ${error}`);
    }
  },
);

const signIn = createAsyncThunk(
  'auth/signIn',
  async (userData: ISignInData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw error;
      }

      const user = await response.json();

      dispatch(setAuthState(user));
    } catch (error) {
      return rejectWithValue(`${AuthErrors.signIn}: ${error}`);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, { payload }: PayloadAction<ICurrentUserState>) => {
      state.isAuth = true;
      state.currentUser = payload;
    },
    updateTheme: (state, { payload }: PayloadAction<ThemeType>) => {
      state.theme = payload;
    },
    changeLanguage: (state, { payload }: PayloadAction<LanguageType>) => {
      state.language = payload;
    },
    resetAuthState: () => initialState,
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

export const { setAuthState, resetAuthState, updateTheme, changeLanguage } =
  authSlice.actions;
export { authSlice, signUp, signIn };
