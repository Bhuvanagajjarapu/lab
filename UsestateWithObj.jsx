import React, {useState} from 'react';

const UsestateWithObj = () => {
    const [student, setStudent]=useState({
        name:'ABC',
        college:'SVECW'
    })
    const changeMe=()=> {
        setStudent({name:'DEF',college:'VIT'})
    }
    return (
        <div>
           <h1>{student.name}</h1> 
           <h1>{student.college}</h1> 
           <button onClick = {changeMe}>Change Text</button>
        </div>
    );
};

export default UsestateWithObj;