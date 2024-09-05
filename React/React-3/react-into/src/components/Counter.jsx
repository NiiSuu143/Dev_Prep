import React from "react";

function Counter(props) {
    // create a state for that
    const [value, setValue] = React.useState(props.initialValue);
    
    const handleIncrement = () => {
        // alert("I am clicked");
        if(value==10) {
            return;
        }
        setValue(value + 1);
    }

    const handleDecrement = () => {
        // alert("I am clicked");
        if(value==0) {
            return;
        }
        setValue(value - 1);
    }

    return <div>
        <div>{value}</div>
        <button onClick={handleIncrement}>+ Plus</button>
        <button onClick={handleDecrement}>- Minus</button>
    </div>
}


export default Counter;