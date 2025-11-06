import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Slices/CounterSlice';

const Counter = () => {

  const count = useSelector( (state)=> state.counter.value );
  const dispatch  = useDispatch();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 flex flex-col items-center gap-6">
    
    <h1 className="text-3xl font-bold text-white tracking-wide">Counter App</h1>

    <button
      onClick={() => dispatch(increment())}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-8 rounded-lg shadow-lg hover:shadow-green-500/50 transition duration-300"
    >
      Increment
    </button>

    <div className="text-5xl font-extrabold text-white">{count}</div>

    <button
      onClick={() => dispatch(decrement())}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-8 rounded-lg shadow-lg hover:shadow-red-500/50 transition duration-300"
    >
      Decrement
    </button>

  </div>
</div>

  )
}

export default Counter;