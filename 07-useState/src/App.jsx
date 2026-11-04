import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function IncreaseNum() {
    setnum(num + 1);
  }
  function DecreaseNum() {
    setnum(num - 1);
  }
  function IncreaseBy5() {
    setnum(num + 5);
  }

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={IncreaseNum}>Increase</button>
      <button onClick={DecreaseNum}>Decrease</button>
      <button onClick={IncreaseBy5}>Increase by 5</button>
    </div>
  )
}

export default App
