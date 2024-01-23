import React,{useState} from 'react';

const HooksEx2 = () => {
    const [count,setCount]=useState(0)
    const Update=()=> {
        setCount(count=>count+5)
    }
    const Decre = () => {
        setCount(count-1)
    }
    return (
        <div>
           <h1>Hooks</h1>
           <h1>Count:{count}</h1>
           <button onClick={Update}>+</button> 
           <button onClick={Decre}>-</button>
        </div>
    );
};

export default HooksEx2;