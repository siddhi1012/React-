import { useState, useEffect } from "react"

const App = () => {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(100);
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);

  function aChange() {
    console.log("A is Changing");
  }

  function bChange() {
    console.log("B is Changing");
  }

  useEffect(() => {
    bChange();
  }, [b]) //dependency

  return (
    <div>
      <h1>num1: {num1}</h1>
      <h1>num2: {num2} </h1>
      <button
        onMouseEnter={() => {
          setnum1(num1 + 1)
        }}
        onMouseLeave={() => {
          setnum2(num2 + 100)
        }}
      >
        Hover
      </button>

      <h1>a: {a}</h1>
      <h1>b: {b}</h1>
      <button onClick={() => {
        seta(a + 1)
      }}>
        Change A
      </button>
      <button
        onClick={() => {
          setb(b - 1)
        }}>Change B
      </button>
    </div>
  )
}

export default App
