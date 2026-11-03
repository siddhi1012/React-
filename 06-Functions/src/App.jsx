import React from 'react'

const App = () => {

  function btnCliked() {
    console.log("Button Clikced");
  }

  function inputChanging(val) {
    console.log(val);
  }

  function pageScrolling(ele) {
    if (ele > 0) {
      console.log("Seedha Scrolling");
    } else {
      console.log("Ulta Scrolling");
    }
  }

  return (
    <div>
      <h1>Hello, Siddhi</h1>
      <input type="text" placeholder='Enter the name' onChange={function (ele) {
        inputChanging(ele.target.value);
      }} />
      <button onClick={btnCliked}>Change User</button>
      <div onWheel={function (ele) {
        pageScrolling(ele.deltaY);
      }}>
        <div className='page1'>1</div>
        <div className='page2'>2</div>
        <div className='page3'>3</div>
      </div>
    </div>
  )
}

export default App
