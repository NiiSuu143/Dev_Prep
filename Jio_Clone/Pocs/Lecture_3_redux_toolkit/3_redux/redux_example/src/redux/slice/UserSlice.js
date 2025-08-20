import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "UserSlice",
    initialState: {
        user: null,
        loading: true,
        error: null
    }, 
    // define all the possible logics
    reducers: {
        onPending: (state) => {
            state.user = null,
            state.loading = true,
            state.error = null
        },
        onRejected: (state, params) => {
            state.user = null,
            state.loading = false,
            state.error = params.payload
        },
        onFulfilled: (state, params) => {
            state.user = params.payload,
            state.loading = false,
            state.error = null
        }
    }
})

const userActions = UserSlice.actions;
export { userActions };
export default UserSlice;