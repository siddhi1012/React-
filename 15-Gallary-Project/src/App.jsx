import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(1)

  const getData = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    setUserData(res.data);
  }

  useEffect(() => {
    getData();
  }, [index])

  let printUserData = <h3 className='text-gray-400 text-sm absolute font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map((ele, index) => {
      return (
        <div key={index} className='group'>
          <Card ele={ele} />
        </div>
      )
    })
  }

  return (
    <div className='bg-zinc-950 overflow-auto min-h-screen p-5 md:p-8 text-white'>

      <h1 className='text-2xl md:text-3xl font-bold text-amber-400 mb-6'>
        Image Gallery
      </h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 p-2 min-h-[82%]'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-6 gap-6'>
        <button
        style ={{opacity: index === 1 ? 0.5 : 1}}
          className='bg-amber-400 hover:bg-amber-300 text-black text-sm cursor-pointer active:scale-95 transition-all duration-200 rounded-xl px-6 py-2.5 font-semibold shadow-md disabled:opacity-50'
          onClick={() => {
            if (index > 1) {
              setindex(index - 1)
              setUserData([]);
            }
          }}
        >
          Prev
        </button>

        <span className='text-gray-400 font-medium text-sm'>
          Page {index}
        </span>

        <button
          className='bg-amber-400 hover:bg-amber-300 text-black text-sm cursor-pointer active:scale-95 transition-all duration-200 rounded-xl px-6 py-2.5 font-semibold shadow-md'
          onClick={() => {
            setUserData([]);
            setindex(index + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App