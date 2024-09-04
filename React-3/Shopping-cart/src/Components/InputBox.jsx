import React from "react";

function InputBox(props) {
    const handleInput = props.handleInput;
    const content = props.content;
    const handleAddItem = props.handleAddItem;
    return <div className="input-box">
            <input type="text" onChange={handleInput} value={content}/>
            <button onClick={handleAddItem}>Add Items</button>
    </div>
}

export default InputBox;