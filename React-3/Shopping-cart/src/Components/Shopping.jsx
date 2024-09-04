// rfce
import React, { useState } from 'react'
import InputBox from './InputBox';
import ListItem from './ListItem';

function Shopping() {
    const [content, setContent] = useState("");
    // state ke through
    const [tasks, setTasks] = useState([]);

    const handleInput = (e) => {
        setContent(e.target.value);
    }

    const handleAddItem = () => {
        console.log("Add Items");
        // input value
        const newItem = content;
        // add to the task array
        // yeh wala nahi karna hai kabhi bhi tasks.push(newItem);

        // const newArr = [];
        // for(let i = 0; i < tasks.length; i++) {
        //     newArr.push(tasks[i]);
        // }
        // newArr.push(newItem);

        const newArr = [...tasks];
        newArr.push(newItem);

        setTasks(newArr);
        // content empty
        setContent("");
    }

    const handleDelete = (index) => {
        console.log("Delete");
        // const copiedTasks = [...tasks];

        // inbuild funciton -> search
        const filterArr = [];
        for(let i = 0; i < tasks.length; i++) {
            if(i != index) {
                filterArr.push(tasks[i]);
            }
        }
        setTasks(filterArr);
    }

    return (
    <div className='Shoping-list'>
        <InputBox 
        handleInput={handleInput} 
        content={content} 
        handleAddItem={handleAddItem}></InputBox>
        <h2>Shopping Cart</h2>
        <ListItem 
        handleDelete={handleDelete} 
        tasks={tasks}></ListItem>
    </div>
  )
}

export default Shopping




