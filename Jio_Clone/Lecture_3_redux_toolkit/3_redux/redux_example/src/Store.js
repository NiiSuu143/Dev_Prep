import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './CounterSlice';

const store = configureStore({
    reducer: {
        counterSection: counterSlice.reducer,
    }
})

export default store;