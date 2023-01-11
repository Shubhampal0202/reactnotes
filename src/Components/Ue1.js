import React,{useState, useEffect} from 'react'

function Ue1() {// useEffect method is called after render(means jo bhi jsx return karte hai)
    const [count,setCount] = useState(0);
    console.log(count);
    useEffect(()=>{
        console.log("useEffect is called");
        document.title = `button clicked ${count}`
    })
    console.log("render");
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
}

export default Ue1
// here useEffect method work like componentDidMount(when first time Ui is attached on dom) and 
// componentDidUpdate(when a state is changed), side effect task can be performed in useEffect() method 