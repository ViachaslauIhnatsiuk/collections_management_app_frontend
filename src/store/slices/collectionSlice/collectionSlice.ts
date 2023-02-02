import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/baseUrl';
import { CollectionStatus, ICollection, ICollectionsState } from './collectionModel';

const initialState: ICollectionsState = {
  collections: [],
  status: '',
  error: '',
};

const getCollections = createAsyncThunk(
  'collections/getCollections',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/collections`);

      if (!response.ok) {
        throw new Error('Сollections request error');
      }

      const collections = await response.json();

      return collections;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const createCollection = createAsyncThunk(
  'collections/createCollection',
  async (newCollection: ICollection, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/collections`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCollection),
      });

      if (!response.ok) {
        throw new Error('Сollection creation error');
      }

      const createdCollection = await response.json();

      dispatch(createNewCollection(createdCollection));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const updateCollection = createAsyncThunk(
  'collections/updateCollection',
  async (updatedCollectionData: ICollection, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/collections${updatedCollectionData._id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedCollectionData),
        },
      );

      if (!response.ok) {
        throw new Error('Сollection update error');
      }

      const updatedCollection = await response.json();

      dispatch(updateSelectedCollection(updatedCollection));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const deleteCollection = createAsyncThunk(
  'collections/deleteCollection',
  async (collectionId: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/collections/${collectionId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Сollection removal error');
      }

      dispatch(deleteSelectedCollection(collectionId));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const setPending = (state: ICollectionsState) => {
  state.status = CollectionStatus.loading;
  state.error = '';
};

const setError = (
  state: ICollectionsState,
  { payload }: PayloadAction<unknown | string>,
) => {
  state.status = CollectionStatus.rejected;
  state.error = payload as string;
};

const collectionSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    createNewCollection: (state, { payload }: PayloadAction<ICollection>) => {
      state.collections = [...state.collections, payload];
    },
    updateSelectedCollection: (state, { payload }: PayloadAction<ICollection>) => {
      state.collections = state.collections.map((collection) => {
        if (collection._id === payload._id) {
          return payload;
        }
        return collection;
      });
    },
    deleteSelectedCollection: (state, { payload }: PayloadAction<string>) => {
      state.collections = state.collections.filter(
        (collection) => collection._id !== payload,
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(getCollections.pending, setPending);
    builder.addCase(createCollection.pending, setPending);
    builder.addCase(updateCollection.pending, setPending);
    builder.addCase(deleteCollection.rejected, setPending);

    builder.addCase(
      getCollections.fulfilled,
      (state, { payload }: PayloadAction<ICollection[]>) => {
        state.status = CollectionStatus.resolved;
        state.collections = payload;
      },
    );

    builder.addCase(getCollections.rejected, setError);
    builder.addCase(createCollection.rejected, setError);
    builder.addCase(updateCollection.rejected, setError);
    builder.addCase(deleteCollection.rejected, setError);
  },
});

export const { updateSelectedCollection, deleteSelectedCollection, createNewCollection } =
  collectionSlice.actions;
export {
  collectionSlice,
  getCollections,
  createCollection,
  updateCollection,
  deleteCollection,
};
