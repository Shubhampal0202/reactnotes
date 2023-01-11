import React,{useState} from 'react'

function Us() {
    const [count, setCount] = useState(0);
    // here count is a variable, used for state setCount is a 
    // function which handle the state(count), in functional component each state has its own function
    // which are used for handling the state here count initialized with 0, here useState() are used 
    // for defining states in functional component
    const [obj, setObj] = useState({msg:'hello'});
    console.log(count);
  return (
    <div>
        <h1>Current count {count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
        <h1>{obj.msg}</h1>
    </div>
  )
}

export default Us
// hooks provide the states in functional component
// useEffect provide the life cycle with diff diff variation