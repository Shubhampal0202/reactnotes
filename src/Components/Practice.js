import React, { useState, useEffect } from 'react'

function Practice() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState({ msg: '' });
    // console.log(count);
    useEffect(() => {
        console.log("useEffect is called");
        document.title = `button clicked ${count}`
    }, [count])
    console.log("render");
    let handleChange = (e) => {
        text.msg = e.target.value;
        console.log(text);
        // setText(text); // abhi state change nhi hogi bcos old text object aur updated text object 
        //ka address same rahega object heap me bante hai stack me address hold karte hai
        setText({...text});
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <input type="text" value={text.msg} onChange={(e) => handleChange(e)} />
        </div>
    )
}

export default Practice

