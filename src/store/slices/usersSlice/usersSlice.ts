import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/baseUrl';
import { setError, setPending, setResolved } from './usersHelpers';
import { IUser, IUsersState, UpdateUser, UsersErrors } from './usersModel';

const initialState: IUsersState = {
  users: [],
  status: '',
  error: '',
};

const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/users`);

      if (!response.ok) {
        throw new Error(UsersErrors.get);
      }

      const users = await response.json();

      dispatch(setUsers(users));
    } catch (error) {
      return rejectWithValue(UsersErrors.get);
    }
  },
);

const updateUser = createAsyncThunk(
  'users/updateUser',
  async ([updatedUserData, id]: UpdateUser, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUserData),
      });

      if (!response.ok) {
        throw new Error(UsersErrors.update);
      }

      const updatedUser = await response.json();

      dispatch(updateSelectedUser(updatedUser));
    } catch (error) {
      return rejectWithValue(UsersErrors.update);
    }
  },
);

const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(UsersErrors.delete);
      }

      dispatch(deleteSelectedUser(userId));
    } catch (error) {
      return rejectWithValue(UsersErrors.delete);
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, { payload }: PayloadAction<IUser[]>) => {
      state.users = payload;
    },
    updateSelectedUser: (state, { payload }: PayloadAction<IUser>) => {
      state.users = state.users.map((user) => {
        if (user.id === payload.id) {
          return payload;
        }
        return user;
      });
    },
    deleteSelectedUser: (state, { payload }: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
    resetUsersState: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(getUsers.pending, setPending);
    builder.addCase(updateUser.pending, setPending);
    builder.addCase(deleteUser.pending, setPending);

    builder.addCase(getUsers.fulfilled, setResolved);
    builder.addCase(updateUser.fulfilled, setResolved);
    builder.addCase(deleteUser.fulfilled, setResolved);

    builder.addCase(getUsers.rejected, setError);
    builder.addCase(updateUser.rejected, setError);
    builder.addCase(deleteUser.rejected, setError);
  },
});

export const { setUsers, updateSelectedUser, deleteSelectedUser, resetUsersState } =
  usersSlice.actions;
export { usersSlice, getUsers, updateUser, deleteUser };
