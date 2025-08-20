import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import counterInputSlice from "../redux/slice/CounterInputSlice";
const action = counterInputSlice.actions;


function Counter() {
    // state management -> set
    const [ value, setValue ] = useState("");
    const { count } = useSelector((store) => store.counterInputSlice);
    // const value = useSelector((store) => store.counterInputSlice.value);
    const dispatch = useDispatch();

    const increment = () => {
        // setCount(count + delta);
        dispatch(action.increment());
    }

    const decrement = () => {
        // setCount(count - delta);
        dispatch(action.decrement());
    }

    const updateDeltaHandler = () => {
        // setDelta(Number(value));
        dispatch(action.updateDelta(Number(value)));
    }

    return (<>
        <div>
            <input style={{height: "30px"}} type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={updateDeltaHandler}>Update Delta</button>
        </div>
        <div style={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            marginTop: "5px"
        }}>
            <button onClick={increment}>+</button>
            <p>Count : {count}</p>
            <button onClick={decrement}>-</button>
        </div>

    </>
    )

}

export default Counter;


/***
 * 1. install
 *      npm i @reduxjs/toolkit
 *      npm i react-redux
 * ****/ 