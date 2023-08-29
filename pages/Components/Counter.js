import React, { useState } from 'react'

const Counter = () => {

    const [change,setChange] = useState(0);

    const Inc = () =>{
        setChange(change+1);
    }


    const Dec = () =>{
        setChange(change-1);
    }

    const Reset = () =>{
        setChange(0);
    }

  return (
    <div className='bg-blue-300  w-[100%] h-[35rem] flex flex-col items-center justify-between rounded-3xl'>
        <div className='mt-24'>
        <h1 className='underline font-bold text-5xl'>Counter App</h1>
        </div>

        <div className='flex items-center justify-center flex-col'>
        <h2 className='font-bold text-2xl'>Count:</h2>
        <div>
        <span className='text-2xl'> {change}</span>
        </div>
        </div>

        <div className='mb-24 gap-x-4'>
        <button onClick={Inc} className='border border-black rounded-2xl 
        p-2 ml-5 w-32 bg-purple-500 hover:underline hover:text-xl'>Increment</button>


        <button onClick={Reset} className='border border-black rounded-2xl  p-2 ml-5 mr-5 w-32 bg-purple-500 hover:underline hover:text-xl'>Reset</button>


        <button onClick={Dec} className='border border-black rounded-2xl  p-2 ml-5 w-32 bg-purple-500 hover:underline hover:text-xl'>Decrement</button>
        
        </div>
    </div>
  )
}

export default Counter