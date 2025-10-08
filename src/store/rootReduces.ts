import {combineReducers} from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { productApi } from './api';

const selectionSlice = createSlice({
    name: 'selection',
    initialState:{ selectedPostId: null as number | null},
    reducers:{
        select(state, action: PayloadAction<number>){
            state.selectedPostId = action.payload;
        },
        unselect(state) {
            state.selectedPostId = null;
        },
    },
});

export const rootReducer = combineReducers({
    [productApi.reducerPath]: productApi.reducer,
    selection: selectionSlice.reducer,
});

export type RootState = returnType< typeof rootReducer>;
export const selection = selectionSlice.actions;