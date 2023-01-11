import React,{useState, useEffect} from 'react'

function Ue2() {
    const [count,setCount] = useState(0);
    console.log(count);
    useEffect(()=>{
        console.log("useEffect is called");
        document.title = `button clicked ${count}`
    },[])// here useEffect() method  work like componentdidMount() method it will run only 
    // one time after rendering it will not run on changing states
    console.log("render");
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
}

export default Ue2
