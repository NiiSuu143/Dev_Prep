/*******************************************
 * 
 * 1. UI part -> HTML
 * 2. Bussiness logic -> Js -> (custom hook)
 * 3. Event listener -> Js
 * 4. State : 
 *      1. set
 *      2. update state
 * 
 * *****************************************/ 

import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount = count + 1;
    }

    const decrement = () => {
        setCount = count - 1;
    }

    return <div>
        <button onClick={increment}>+</button>
        <p>Count : {count}</p>
        <button onClick={decrement}>-</button>
    </div>

}