import { useState } from "react"

function Counter() {
    // state management -> set
    const [count, setCount] = useState(0);
    const [delta, setDelta] = useState(1);
    const [value, setValue] = useState("");

    const increment = () => {
        setCount(count + delta);
    }

    const decrement = () => {
        setCount(count - delta);
    }

    const updateDeltaHandler = () => {
        setDelta(Number(value));
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