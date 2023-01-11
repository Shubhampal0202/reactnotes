import React,{useState, useEffect} from 'react'

function Ue3() {
    const [count,setCount] = useState(0);
    const [text, setText] = useState('');
    // console.log(count);
    useEffect(()=>{
        console.log("useEffect is called");
        document.title = `button clicked ${count}`
    },[count])// is array me jo state daloge ussi ke change hone per useEffect() method call hoga
    // if array is empty then it will call only one time uske baad kisi bhi state ke change hone 
    // per useEffect method call nhi hoga 
    console.log("render");
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
    </div>
  )
}

export default Ue3
// count ki value change hone per render aur useEffect() dono call honge
// input value change hone per keval render hoga
