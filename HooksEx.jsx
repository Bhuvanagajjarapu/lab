import React,{useState} from 'react';

const HooksEx = () => {
    const [count,setCount]=useState(0)
    const [msg ,setMsg] =  useState('a')
    const update = () => {
        setCount(count+1)
    }
    const updateText = () => {
        setMsg('b')
    }
    return (
        <div>
            <h1>Hooks Example</h1>
            <h1>Count:{count}</h1>
            <button onClick={update}>+</button>
            <h1>Message:{msg}</h1>
            <button onClick={updateText}>+</button>
        </div>
    );
};

export default HooksEx;