import { userActions } from "../slice/UserSlice";

// redux internally handle
const fetchUserMiddleWare = () => {
    // redux thunk
    return async (dispatch) => {
        try {
            dispatch(userActions.onPending());
            // fetch userData from api and set it to the state
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
            const userData = await response.json();
            dispatch(userActions.onFulfilled(userData));
        } catch(err) {
            dispatch(userActions.onRejected(err));
        } 
    }
}

export default fetchUserMiddleWare;