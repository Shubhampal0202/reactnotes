import React,{useState, useEffect} from 'react'

function Infinite() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect is called");
        document.title = `button clicked ${count}`
        // setCount(100); // abhi loop infinite time nhi chalega bcos state keval ek baar change 
        //ho rhi hai(0 to 100) 
        // let number = Math.random()*100;
        // setCount(number);  // ab infinite loop chalega bcos state baar change ho rhi hai
        // Ue2.js me infinite loop nhi chalega bcos usme useEffect method kewal ek baar chalta hai
    })
    console.log("render");
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
}

export default Infinite
