import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counterSlice",
    initialState: {
        count: 10,
        delta: 1,
        value: ""
    }, 
    // define all the possible logics
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        }
    }
})

export default counterSlice;