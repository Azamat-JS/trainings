import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {productsApi} from './dummyData.js'

export const store = configureStore({
    reducer:{
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware)
});

setupListeners(store.dispatch);