import axios from 'axios'
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts/10');
    // const data = await response.json();
    // console.log(data);
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    <div>
      {data.map((ele,index) =>{
          return <h3>Hello,{ele.author},{index}</h3>
      })}
    </div>
    </div>
  )
}

export default App
