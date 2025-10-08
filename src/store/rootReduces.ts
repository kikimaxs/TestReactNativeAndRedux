// rootReducer module
import { combineReducers } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productsApi } from './api';

const selectionSlice = createSlice({
  name: 'selection',
  initialState: { selectedPostId: null as number | null },
  reducers: {
    select(state, action: PayloadAction<number>) {
      state.selectedPostId = action.payload;
    },
    unselect(state) {
      state.selectedPostId = null;
    },
  },
});

export const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  selection: selectionSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const selectionActions = selectionSlice.actions;