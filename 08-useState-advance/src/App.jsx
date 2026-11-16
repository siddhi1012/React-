import React, { useState } from 'react'

const App = () => {
  // Object
  const [num, setNum] = useState({ user: "Siddhi", age: 23 });
  // Array
  const [arr, setArr] = useState([10, 20, 30]);
 // for batch Update
  const [n, setN] = useState(10);
  const btnClicked = () => {
    // Destructuring
    const newNum = { ...num };
    const newArr = [...arr];
    //object
    newNum.user = "Prasad";
    newNum.age = 24;
    setNum(newNum);
    // array 
    newArr.push(25);
    setArr(newArr);

    // batch update 
    setN(prev => (prev + 1));
    setN(prev => (prev + 1));
    setN(prev => (prev + 1));
  }

  return (
    
    <div>
      <h1>{num.user},{num.age}</h1>
      <h2>{arr}</h2>
      <h3>{n}</h3>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
