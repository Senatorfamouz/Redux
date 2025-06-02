import { configureStore } from "@reduxjs/toolkit";
import countReducer from './CountSlice';

export const store = configureStore ({
    reducer: {
        count: countReducer
    }
});