import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setError, setPending, setResolved } from './itemHelpers';
import { CollectionErrors, IItem, IItemsState, NewItem, UpdatedItem } from './itemModel';
import { BASE_URL } from '../../../constants/commonConstants';

const initialState: IItemsState = {
  items: [],
  status: '',
  error: '',
};

const getItems = createAsyncThunk(
  'items/getItems',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/items`);

      if (!response.ok) {
        throw new Error(CollectionErrors.get);
      }

      const items = await response.json();

      dispatch(setItems(items));
    } catch (error) {
      return rejectWithValue(CollectionErrors.get);
    }
  },
);

const createItem = createAsyncThunk(
  'items/createItem',
  async ([newItemData, collectionId]: NewItem, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/collections/${collectionId}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItemData),
      });

      if (!response.ok) {
        throw new Error(CollectionErrors.create);
      }

      const createdItem = await response.json();

      dispatch(createNewItem(createdItem));
    } catch (error) {
      return rejectWithValue(CollectionErrors.create);
    }
  },
);

const updateItem = createAsyncThunk(
  'items/updateItem',
  async (
    [newItemData, collectionId, itemId]: UpdatedItem,
    { rejectWithValue, dispatch },
  ) => {
    try {
      const response = await fetch(
        `${BASE_URL}/collections/${collectionId}/items/${itemId}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItemData),
        },
      );

      if (!response.ok) {
        throw new Error(CollectionErrors.update);
      }

      const updatedItem = await response.json();

      dispatch(updateSelectedItem(updatedItem));
    } catch (error) {
      return rejectWithValue(CollectionErrors.update);
    }
  },
);

const deleteItem = createAsyncThunk(
  'items/deleteItem',
  async (itemId: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/items/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(CollectionErrors.delete);
      }

      dispatch(deleteSelectedItem(itemId));
    } catch (error) {
      return rejectWithValue(CollectionErrors.delete);
    }
  },
);

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, { payload }: PayloadAction<IItem[]>) => {
      state.items = payload;
    },
    createNewItem: (state, { payload }: PayloadAction<IItem>) => {
      state.items = [...state.items, payload];
    },
    updateSelectedItem: (state, { payload }: PayloadAction<IItem>) => {
      state.items = state.items.map((item) => {
        if (item._id === payload._id) {
          return payload;
        }
        return item;
      });
    },
    deleteSelectedItem: (state, { payload }: PayloadAction<string>) => {
      state.items = state.items.filter((items) => items._id !== payload);
    },
    resetItemsState: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(getItems.pending, setPending);
    builder.addCase(createItem.pending, setPending);

    builder.addCase(getItems.fulfilled, setResolved);
    builder.addCase(createItem.fulfilled, setResolved);
    builder.addCase(updateItem.fulfilled, setResolved);
    builder.addCase(deleteItem.fulfilled, setResolved);

    builder.addCase(getItems.rejected, setError);
    builder.addCase(createItem.rejected, setError);
    builder.addCase(updateItem.rejected, setError);
    builder.addCase(deleteItem.rejected, setError);
  },
});

export const {
  setItems,
  createNewItem,
  updateSelectedItem,
  deleteSelectedItem,
  resetItemsState,
} = itemSlice.actions;
export { itemSlice, getItems, createItem, updateItem, deleteItem };
