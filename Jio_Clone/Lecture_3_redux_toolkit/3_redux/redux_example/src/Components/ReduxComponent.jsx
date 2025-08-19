import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import counterSlice from '../redux/slice/CounterSlice';
const action = counterSlice.actions;

function ReduxCounter() {
    const count = useSelector((store) => store.counterSection.count);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(action.increment());
    }
    const decrement = () => {
        dispatch(action.decrement());
    }
 
    return <div>
        <button onClick={increment}>+</button>
        <p>Count : {count}</p>
        <button onClick={decrement}>-</button>
    </div>
}

export default ReduxCounter