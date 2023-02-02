import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/baseUrl';
import { CollectionStatus, ICollection, ICollectionsState } from './collectionModel';

const initialState: ICollectionsState = {
  collections: [],
  status: '',
  error: '',
};

const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/collections`);

      if (!response.ok) {
        throw new Error('Error fetching collections');
      }

      const collections = await response.json();

      return collections;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const collectionSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    setCollection: (state, { payload }: PayloadAction<ICollection>) => {
      state.collections = [...state.collections, payload];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCollections.pending, (state) => {
      state.status = CollectionStatus.loading;
      state.error = '';
    });
    builder.addCase(
      fetchCollections.fulfilled,
      (state, { payload }: PayloadAction<ICollection[]>) => {
        state.status = CollectionStatus.resolved;
        state.collections = payload;
      },
    );
    builder.addCase(
      fetchCollections.rejected,
      (state, { payload }: PayloadAction<unknown | string>) => {
        state.status = CollectionStatus.rejected;
        state.error = payload as string;
      },
    );
  },
});

export const { setCollection } = collectionSlice.actions;
export { collectionSlice, fetchCollections };
