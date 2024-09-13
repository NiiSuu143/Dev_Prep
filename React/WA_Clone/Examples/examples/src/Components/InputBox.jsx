import { useState } from "react";

function InputBox() {
    const [content, setContent] = useState("");
    
    const handleAlert = () => {
        alert(content);
        setContent("");
    }

    const handleChange = (e) => {
        // console.log(e.target.value);
        const updateValue = e.target.value;

        setContent(updateValue);
        // console.log("Hello");
    }

    return <div>
        <input type="text" value={content} onChange={handleChange}/>
        <button onClick={handleAlert}>Alert Content</button>
    </div>
}

export default InputBox;