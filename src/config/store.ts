import {rootReducer} from '../store/rootReduces';
import{configureStore} from '@reduxjs/toolkit';
import { productsApi } from '../store/api';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefault)=>
        getDefault({ thunk: true, serializableCheck: false}).concat(productsApi.middleware),
    devTools: false,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>