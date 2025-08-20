import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slice/CounterSlice';
import counterInputSlice from './slice/CounterInputSlice';
import UserSlice from './slice/UserSlice';

const store = configureStore({
    reducer: {
        counterSection: counterSlice.reducer,
        counterInputSlice: counterInputSlice.reducer,
        userSlice: UserSlice.reducer
    }
})

export default store;