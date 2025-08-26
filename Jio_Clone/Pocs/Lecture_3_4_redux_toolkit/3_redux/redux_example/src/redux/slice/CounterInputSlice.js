import { createSlice } from "@reduxjs/toolkit";

const counterInputSlice = createSlice({
    name: "counterInputSlice",
    initialState: {
        count: 0,
        delta: 1
    }, 
    // define all the possible logics
    reducers: {
        increment: (state) => {
            state.count += state.delta;
        },
        decrement: (state) => {
            state.count -= state.delta;
        },
        updateDelta: (state, action) => {
            state.delta = action.payload;
        }
    }
})

export default counterInputSlice;